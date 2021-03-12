import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() name: string;
  @Input() total: number;

  constructor() {
    this.name = '';
    this.total = 0;
  }

  ngOnInit(): void {}
}
