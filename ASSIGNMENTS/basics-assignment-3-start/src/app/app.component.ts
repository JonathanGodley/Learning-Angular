import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  infoVisible = false;
  clicks = [];

  onToggleInfo() {
    this.infoVisible = !this.infoVisible;
    this.clicks.push(new Date().toString());
  }
}
