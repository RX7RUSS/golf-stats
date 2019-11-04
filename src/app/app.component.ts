import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'golf-stats';

  constructor(private player: PlayerService) {
    this.player.getPlayers();
    this.player.sortPlayers();
  }

  ngOnInit(): void {
    console.log('players: ', this.player.players);
    console.log('sorted players: ', this.player.sortedPlayers);
  }

}
