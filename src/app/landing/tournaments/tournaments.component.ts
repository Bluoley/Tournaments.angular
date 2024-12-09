import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogTournamentManagmentComponent } from '../../components/dialog-tournament-managment/dialog-tournament-managment.component';
import { Tournament } from '../../services/types/Tournaments';

@Component({
  selector: 'app-tournaments',
  imports: [CommonModule, TournamentListComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent {
  readonly dialog = inject(MatDialog);
  tournamentData: Tournament | undefined;
  constructor() {}

  openTournamentDialog() {
    const dialogRef = this.dialog.open(DialogTournamentManagmentComponent, {
      disableClose: true,
      position: { top: '25px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tournamentData = result.tournament;
      }
    });
  }
}
