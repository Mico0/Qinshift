import {
  AfterViewInit,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  imports: [NgClass],
  templateUrl: './ticket-details.html',
  styleUrl: './ticket-details.scss',
})
export class TicketDetails implements OnInit, OnDestroy, AfterViewInit {
  selectedTicket = input<Ticket>(null);

  hideOutput = output();

  //Called when the component class is instanced
  constructor() {
    console.log('CONSTRUCTOR CALLED');
    console.log(this.selectedTicket());
  }

  //Called after all of the inputs have beein initialized and have their values ( only once )
  ngOnInit() {
    console.log('ON INIT CALLED');
    console.log(this.selectedTicket());
  }

  //Called when the component is removed ( destroyed ) from the view
  ngOnDestroy() {
    console.log('ON DESTROY CALLED');
  }

  //Called after the component's template has been rendered in the browser
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT CALLED');
  }

  onClearCLick() {
    this.hideOutput.emit();
  }
}
