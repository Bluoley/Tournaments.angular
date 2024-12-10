import { Component, inject, Input, OnInit } from '@angular/core';
import { Tournament } from '../../services/types/Tournaments';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogTournamentDetailsComponent } from '../dialog-tournament-details/dialog-tournament-details.component';
import { DialogTournamentManagmentComponent } from '../dialog-tournament-managment/dialog-tournament-managment.component';

@Component({
  selector: 'app-tournament-card',
  imports: [CommonModule],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.scss',
})
export class TournamentCardComponent implements OnInit {
  @Input() tournament: Tournament | undefined;
  readonly dialog = inject(MatDialog);

  constructor() {}

  ngOnInit(): void {}

  openTournamentManagmentDialog(type: string) {
    const dialogRef = this.dialog.open(DialogTournamentManagmentComponent, {
      disableClose: true,
      position: { top: '25px' },
      data: {
        type,
        data: this.tournament,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tournament = result.tournament;
      }
    });
  }

  openTournamentDialog() {
    const dialogRef = this.dialog.open(DialogTournamentDetailsComponent, {
      data: {
        data: this.tournament,
      },
      position: { top: '25px' },
    });
  }
}
