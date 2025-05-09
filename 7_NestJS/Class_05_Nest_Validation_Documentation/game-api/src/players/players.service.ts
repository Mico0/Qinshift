import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PlayerDto } from './dtos/player.dto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { v4 as uuid } from 'uuid';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { SkillsService } from 'src/skills/skills.service';
import { SkillDto } from 'src/skills/dtos/skill.dto';

@Injectable()
export class PlayersService {
  constructor(private sklllsService: SkillsService) {}

  private PLAYERS_PATH = join(process.cwd(), 'data', 'players.json');

  async findAll() {
    const playersJSON = await readFile(this.PLAYERS_PATH, 'utf-8');

    const players = JSON.parse(playersJSON) as PlayerDto[];

    return players;
  }

  async findById(id: string) {
    const players = await this.findAll();

    const foundPlayer = players.find((player) => player.id === id);

    if (!foundPlayer) throw new NotFoundException('player not found');

    return foundPlayer;
  }

  async save(players: PlayerDto[]) {
    await writeFile(this.PLAYERS_PATH, JSON.stringify(players, null, 2));
  }

  async create(playerData: CreatePlayerDto) {
    const players = await this.findAll();

    const newPlayer: PlayerDto = {
      id: uuid(),
      skills: [],
      experience: 0,
      ...playerData,
    };

    players.push(newPlayer);

    await this.save(players);

    return newPlayer;
  }

  async update(id: string, updateData: UpdatePlayerDto) {
    const players = await this.findAll();

    const playerIndex = players.findIndex((player) => player.id === id);

    if (playerIndex === -1) throw new NotFoundException('player not found');

    players[playerIndex] = { ...players[playerIndex], ...updateData };

    await this.save(players);
  }

  async delete(id: string) {
    const players = await this.findAll();

    const updatedPlayers = players.filter((player) => player.id !== id);

    if (updatedPlayers.length === players.length)
      throw new NotFoundException('player not found');

    await this.save(updatedPlayers);
  }

  async addSkill(id: string, skillId: string) {
    const foundPlayer = await this.findById(id);

    const foundSkill = await this.sklllsService.findById(skillId);

    foundPlayer.skills.push(foundSkill.id);

    const players = await this.findAll();

    const updatedPlayers = players.map((player) =>
      player.id === foundPlayer.id ? foundPlayer : player,
    );

    await this.save(updatedPlayers);

    return {
      msg: `skill: "${foundSkill.name}" was succssfully added to player: "${foundPlayer.name}"`,
    };
  }

  async findSkills(id: string) {
    const foundPlayer = await this.findById(id);

    const playerSKills: SkillDto[] = [];

    for (let skillId of foundPlayer.skills) {
      const skill = await this.sklllsService.findById(skillId);

      playerSKills.push(skill);
    }

    return playerSKills;
  }
}
