import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStop() {

  }

  onStart() {
    setTimeout(this.increment(), 1000);
  }

  increment() {
    this.valueChange.emit(this.counter);
    this.counter = this.counter + 1;
  }
}
