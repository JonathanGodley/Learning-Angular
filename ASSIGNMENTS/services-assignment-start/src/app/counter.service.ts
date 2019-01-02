import {EventEmitter} from '@angular/core';

export class CounterService {
  countChanged = new EventEmitter<number>();
  count = 0;

  increaseCount() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  constructor() { }
}
