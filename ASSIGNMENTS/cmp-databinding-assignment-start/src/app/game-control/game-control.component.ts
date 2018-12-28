import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStop() {

  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter);
      this.counter++;
    }, 1000);
  }
}
