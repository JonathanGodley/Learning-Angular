import {Component, OnInit} from '@angular/core';
import {CounterService} from './counter.service';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  count = 0;

  constructor(private counterService: CounterService, private usersService: UsersService) {
    counterService.countChanged.subscribe((count: number) => (this.count = count));
  }

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
