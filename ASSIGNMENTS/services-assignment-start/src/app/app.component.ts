import {Component} from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  constructor(private counterService: CounterService) {
    counterService.countChanged.subscribe((count: number) => (this.count = count));
  }
}
