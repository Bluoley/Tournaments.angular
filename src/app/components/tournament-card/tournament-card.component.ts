import { Component, inject, Input, OnInit } from '@angular/core';
import { Tournament } from '../../services/types/Tournaments';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogTournamentDetailsComponent } from '../dialog-tournament-details/dialog-tournament-details.component';

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

  ngOnInit(): void {
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
