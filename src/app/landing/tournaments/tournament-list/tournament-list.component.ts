import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TournamentCardComponent } from '../../../components/tournament-card/tournament-card.component';
import { TournamentsService } from '../../../services/tournaments.service';
import { Tournament } from '../../../services/types/Tournaments';

@Component({
  selector: 'app-tournament-list',
  imports: [TournamentCardComponent],
  templateUrl: './tournament-list.component.html',
  styleUrl: './tournament-list.component.scss',
})
export class TournamentListComponent implements OnInit, OnChanges {
  @Input() tournament: Tournament | undefined;
  tournamentsData: any[] | undefined;
  constructor(private tournamentService: TournamentsService) {}

  ngOnInit(): void {
    this.getAllTournaments();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tournamentsData?.push(this.tournament);
  }

  getAllTournaments() {
    this.tournamentsData = this.tournamentService.getAllTournaments();
  }
}
