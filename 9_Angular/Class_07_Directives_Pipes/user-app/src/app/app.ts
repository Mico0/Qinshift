import { Component, model, signal } from '@angular/core';
import { Header } from './core/components/header/header';
import { usersMock } from './feature/users/users-mock';
import { User } from './feature/users/models/user-model';
import { UserCard } from './feature/users/components/user-card/user-card';
import { FilterPipe } from './core/pipes/filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Header, UserCard, FilterPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = signal<User[]>(usersMock);
  searchValue = model('');

  //KEYUP IMPLEMENTATION
  // searchValue = signal('');
  // onInputChange(event: Event) {
  //   const target = event.target as HTMLInputElement;

  //   console.log(target.value);
  //   this.searchValue.set(target.value);
  // }
}
