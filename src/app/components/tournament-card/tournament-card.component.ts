import { Component, Input } from '@angular/core';
import { Tournament } from '../../services/types/Tournaments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-card',
  imports: [CommonModule],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.scss',
})
export class TournamentCardComponent {
  @Input() tournament: Tournament | undefined;
}
