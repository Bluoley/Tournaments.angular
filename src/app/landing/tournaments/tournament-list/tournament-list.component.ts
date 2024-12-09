import { Component, OnInit } from '@angular/core';
import { TournamentCardComponent } from '../../../components/tournament-card/tournament-card.component';
import { TournamentsService } from '../../../services/tournaments.service';
import { Tournament } from '../../../services/types/Tournaments';

@Component({
  selector: 'app-tournament-list',
  imports: [TournamentCardComponent],
  templateUrl: './tournament-list.component.html',
  styleUrl: './tournament-list.component.scss',
})
export class TournamentListComponent implements OnInit {
  // tournamentData: Tournament[] | undefined;
  chunkData: any[] | undefined;
  constructor(private tournamentService: TournamentsService) {}

  ngOnInit(): void {
    this.getAllTournaments();
  }

  getAllTournaments() {
    let data = this.tournamentService.getAllTournaments();

    this.chunkData = this.chunkArr(3, data);
    console.log("🚀 ~ TournamentListComponent ~ getAllTournaments ~ this.chunkData:", this.chunkData[0][0])
  }

  chunkArr(size: number, data: any) {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  }
}
