import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
