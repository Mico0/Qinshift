import { Injectable } from '@nestjs/common';
import { appendFileSync } from 'fs';
import { appendFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class LoggerService {
  private LOGS_PATH = join(process.cwd(), 'src', 'logger', 'data', 'logs.txt');

  async addLog(msg: string) {
    const date = new Date();

    appendFileSync(this.LOGS_PATH, `${msg} @ ${date}\n`, 'utf-8');
  }
}
