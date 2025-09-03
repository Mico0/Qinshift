import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, Injectable } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Dog } from '../types/dog';

export interface DogState {
  dogs: Dog[];
}

const initialState: DogState = {
  dogs: [
    {
      id: 2,
      name: 'Blacky',
      breed: 'Rotweiler',
      createdAt: new Date(),
      age: 3,
      lastWalked: new Date(),
      walkCount: 2,
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class DogStore extends signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('dogs'),
  withMethods((store) => ({
    addDog(name: string, breed: string, age: number) {
      const newDog: Dog = {
        name,
        breed,
        age,
        id: Date.now(),
        createdAt: new Date(),
        lastWalked: undefined,
        walkCount: 0,
      };

      patchState(store, {
        dogs: [...store.dogs(), newDog],
      });
    },
    removeDog(id: number) {
      const updatedList = store.dogs().filter((dog) => dog.id !== id);
      patchState(store, { dogs: updatedList });
    },
    walkDog(id: number) {
      const dogs = store.dogs().map((dog: Dog) => {
        if (dog.id === id) {
          return {
            ...dog,
            lastWalked: new Date(),
            walkCount: dog.walkCount + 1,
          };
        }
        return dog;
      });

      patchState(store, {
        dogs,
      });
    },
  })),
  withHooks({
    onInit(store) {
      const stored = localStorage.getItem('dogs');

      console.log(stored);

      if (stored) {
        try {
          const parsedDogs = JSON.parse(stored);

          patchState(store, { dogs: parsedDogs });
        } catch (error) {
          console.error('issue while parsing dogs JSON', error);
        }
      }
    },

    onDestroy(store) {
      console.log('destroy', store);
      const dogs = store.dogs();

      // if (dogs.length > 0) {
      localStorage.setItem('dogs', JSON.stringify(dogs));
      // }
    },
  }),
  withComputed((store) => ({
    dogStats: computed(() => {
      const dogs = store.dogs();

      const totalDogs = dogs.length;
      const mostWaledDog = dogs.sort((a, b) => b.walkCount - a.walkCount)[0];

      return {
        totalDogs,
        mostWaledDog,
      };
    }),
  })),
) {
  constructor() {
    super();
  }
}
