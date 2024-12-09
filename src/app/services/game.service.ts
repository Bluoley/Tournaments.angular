import { Injectable } from '@angular/core';
import { Game } from './types/Games';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  getAllGames(): Game[] {
    return [
      {
        name: 'League of Legends',
        type: 'MOBA',
      },
      {
        name: 'Fornite',
        type: 'Shooter',
      },
      {
        name: 'Counter Strike 2',
        type: 'Shooter',
      },
      {
        name: 'Free Fire',
        type: 'Shooter',
      },
      {
        name: 'Street Fighter',
        type: 'Fighting',
      },
    ];
  }
}
