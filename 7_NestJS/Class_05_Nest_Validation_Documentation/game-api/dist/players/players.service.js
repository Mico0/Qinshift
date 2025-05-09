"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const uuid_1 = require("uuid");
const skills_service_1 = require("../skills/skills.service");
let PlayersService = class PlayersService {
    sklllsService;
    constructor(sklllsService) {
        this.sklllsService = sklllsService;
    }
    PLAYERS_PATH = (0, node_path_1.join)(process.cwd(), 'data', 'players.json');
    async findAll() {
        const playersJSON = await (0, promises_1.readFile)(this.PLAYERS_PATH, 'utf-8');
        const players = JSON.parse(playersJSON);
        return players;
    }
    async findById(id) {
        const players = await this.findAll();
        const foundPlayer = players.find((player) => player.id === id);
        if (!foundPlayer)
            throw new common_1.NotFoundException('player not found');
        return foundPlayer;
    }
    async save(players) {
        await (0, promises_1.writeFile)(this.PLAYERS_PATH, JSON.stringify(players, null, 2));
    }
    async create(playerData) {
        const players = await this.findAll();
        const newPlayer = {
            id: (0, uuid_1.v4)(),
            skills: [],
            experience: 0,
            ...playerData,
        };
        players.push(newPlayer);
        await this.save(players);
        return newPlayer;
    }
    async update(id, updateData) {
        const players = await this.findAll();
        const playerIndex = players.findIndex((player) => player.id === id);
        if (playerIndex === -1)
            throw new common_1.NotFoundException('player not found');
        players[playerIndex] = { ...players[playerIndex], ...updateData };
        await this.save(players);
    }
    async delete(id) {
        const players = await this.findAll();
        const updatedPlayers = players.filter((player) => player.id !== id);
        if (updatedPlayers.length === players.length)
            throw new common_1.NotFoundException('player not found');
        await this.save(updatedPlayers);
    }
    async addSkill(id, skillId) {
        const foundPlayer = await this.findById(id);
        const foundSkill = await this.sklllsService.findById(skillId);
        foundPlayer.skills.push(foundSkill.id);
        const players = await this.findAll();
        const updatedPlayers = players.map((player) => player.id === foundPlayer.id ? foundPlayer : player);
        await this.save(updatedPlayers);
        return {
            msg: `skill: "${foundSkill.name}" was succssfully added to player: "${foundPlayer.name}"`,
        };
    }
    async findSkills(id) {
        const foundPlayer = await this.findById(id);
        const playerSKills = [];
        for (let skillId of foundPlayer.skills) {
            const skill = await this.sklllsService.findById(skillId);
            playerSKills.push(skill);
        }
        return playerSKills;
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], PlayersService);
//# sourceMappingURL=players.service.js.map