import { Component, OnInit } from '@angular/core';
import { TournamentCardComponent } from '../../../components/tournament-card/tournament-card.component';
import { TournamentsService } from '../../../services/tournaments.service';

@Component({
  selector: 'app-tournament-list',
  imports: [TournamentCardComponent],
  templateUrl: './tournament-list.component.html',
  styleUrl: './tournament-list.component.scss',
})
export class TournamentListComponent implements OnInit {
  chunkData: any[] | undefined;
  constructor(private tournamentService: TournamentsService) {}

  ngOnInit(): void {
    this.getAllTournaments();
  }

  getAllTournaments() {
    let data = this.tournamentService.getAllTournaments();

    this.chunkData = this.chunkArr(3, data);
  }

  chunkArr(size: number, data: any) {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  }
}
