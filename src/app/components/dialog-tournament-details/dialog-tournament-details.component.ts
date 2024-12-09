import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tournament-details',
  imports: [CommonModule],
  templateUrl: './dialog-tournament-details.component.html',
  styleUrl: './dialog-tournament-details.component.scss',
})
export class DialogTournamentDetailsComponent implements OnInit{
  data = inject(MAT_DIALOG_DATA).data;
  readonly dialogRef = inject(MatDialogRef<DialogTournamentDetailsComponent>);

  ngOnInit(): void {
    console.log('this.data',this.data);
  }
}
