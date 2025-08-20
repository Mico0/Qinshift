import { Component, input } from '@angular/core';
import { User } from '../../models/user-model';
import { HoverShadowDirective } from '../../../../core/directives/hover-shadow-directive';
import { ToggleAddressDirective } from '../../../../core/directives/toggle-address-directive';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../../../../core/pipes/shorten-pipe';

@Component({
  selector: 'app-user-card',
  imports: [
    HoverShadowDirective,
    ToggleAddressDirective,
    CommonModule,
    ShortenPipe,
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  user = input.required<User>();
}
