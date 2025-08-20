import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../feature/users/models/user-model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], searchValue: string): User[] {
    const filteredUsers = value.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase().trim()),
    );

    return filteredUsers;
  }
}
