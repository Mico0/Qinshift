import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logAction(action: string) {
    console.log(`User action: ${action} on: ${new Date().toDateString()}`);
  }
}
