import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogStore } from '../../store/dog.store';

@Component({
  selector: 'app-dog-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './dog-manager.html',
  styleUrl: './dog-manager.scss',
})
export class DogManager {
  store = inject(DogStore);

  dogName: string = '';
  dogBreed: string = '';
  dogAge: number = 1;

  addDog() {
    console.log(this.dogName, this.dogAge, this.dogBreed);

    this.store.addDog(this.dogName, this.dogBreed, this.dogAge);

    this.resetForm();
  }

  removeDog(id: number) {
    this.store.removeDog(id);
  }

  walkDog(id: number) {
    this.store.walkDog(id);
  }

  resetForm() {
    this.dogName = '';
    this.dogBreed = '';
    this.dogAge = 1;
  }
}
