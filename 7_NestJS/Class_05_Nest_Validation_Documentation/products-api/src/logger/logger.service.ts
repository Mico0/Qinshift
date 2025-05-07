import { Injectable } from '@nestjs/common';
import { appendFileSync } from 'node:fs';
import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';

@Injectable()
export class LoggerService {
  private LOGS_PATH = join(process.cwd(), 'src', 'logger', 'data', 'logs.txt');

  addLog(msg: string) {
    const date = new Date();

    appendFileSync(this.LOGS_PATH, `${msg} @ ${date}\n`, 'utf-8');
  }
}
