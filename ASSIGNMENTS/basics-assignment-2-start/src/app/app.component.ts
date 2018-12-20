import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  enableButton = false;

  onUpdateUsername(event: any) {
    this.enableButton = (<HTMLInputElement>event.target).value !== '';
  }

  onClearUsername() {
    this.username = '';
    this.enableButton = false;
  }
}
