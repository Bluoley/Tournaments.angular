import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

@Component({
  selector: 'app-tournaments',
  imports: [CommonModule, TournamentListComponent, ],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent {
  typeList: boolean = true;

  constructor() {}
}
