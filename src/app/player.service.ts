import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as playerData from './data.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players = [];
  sortedPlayers = [];

  constructor(private http: HttpClient) {}

  public getPlayers() {
    return this.players = playerData.players;
  }

  public sortPlayers() {
    this.sortedPlayers = [...playerData.players].sort((a, b) => {
      if (a.turned_pro < b.turned_pro) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  public sortByCollege() {
    this.sortedPlayers = [...playerData.players].sort((a, b) => (a.college > b.college) ? 1 : -1);
  }

  public sortByHeight() {
    this.sortedPlayers = [...playerData.players].sort((a, b) => (a.height > b.height) ? 1 : -1);
  }

  public sortByName() {
    this.sortedPlayers = [...playerData.players].sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
  }

  // compare() {
  //   this.sortedPlayers = [...playerData.players];
  //
  //   const yearA = this.sortedPlayers[0].turned_pro;
  //   const yearB = this.sortedPlayers[0].turned_pro;
  //
  //   let comparison = 0;
  //   if (yearA > yearB) {
  //     comparison = 1;
  //   } else if (yearA < yearB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

}
