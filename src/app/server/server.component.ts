import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  // can also specify type, serverId: number = 10;

  getServerStatus() {
    return this.serverStatus;
  }
}
