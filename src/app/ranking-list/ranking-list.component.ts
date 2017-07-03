import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { Subscription } from 'rxjs/Subscription';

import { IPlayer } from '../teams/players';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {

  players: IPlayer[];
  errorMessage: string;
  listFilter: string;
  showImage = false;
  imageWidth = 50;
  imageMargin = 0;

  constructor(private _teamService: TeamsService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this._teamService.getPlayers().subscribe(
      players => this.players = players.sort((n1, n2) => {
        if (n1.votes > n2.votes) {
          return 1;
        }

        if (n1.votes < n2.votes) {
          return -1;
        }

        return 0;
      }),
      error => this.errorMessage = <any>error
    );
  }

}