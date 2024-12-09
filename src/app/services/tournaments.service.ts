import { Injectable } from '@angular/core';
import { MajorTournament, Tournament } from './types/Tournaments';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  constructor() {}

  getAllTournaments(): Tournament[] {
    // 1 open
    // 3 done
    return [
      {
        name: 'Gran Torneo',
        description: '',
        ubication: 'Lugar 1, CDMX',
        participants: '85',
        date: '2024-12-31 15:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733721996/lihwlh1p4xynviwwcikm.avif',
        game: 'League of Legends',
        status: 1,
      },
      {
        name: 'Super Torneo',
        description: '',
        ubication: 'Lugar 5, Tijuana',
        participants: '1059',
        date: '2024-12-31 12:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733722241/qglhfyux9aadnvedofkk.webp',
        game: 'Fornite',
        status: 1,
      },
      {
        name: 'Torneo Grande',
        description: '',
        ubication: 'Cualquier Lugar, Sonora',
        participants: '185',
        date: '2024-12-01 10:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733722305/qfiewmfkuaqd8j4mokkf.webp',
        game: 'Counter Strike 2',
        status: 3,
      },
      {
        name: 'Torneo Demasiado Grande',
        description: '',
        ubication: 'Lugar Grande, Sinaloa',
        participants: '984',
        date: '2024-12-31 20:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733722346/moe4pmcjtu2h7zhb2hsy.webp',
        game: 'Free Fire',
        status: 1,
      },
      {
        name: 'Torneo 33',
        description: '',
        ubication: 'Lugar 33, Durango',
        participants: '333',
        date: '2024-12-31 18:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733722384/jgayawvevkel2cgu91lm.jpg',
        game: 'Fornite',
        status: 1,
      },
      {
        name: 'Gran Torneo 44',
        description: '',
        ubication: 'Lugar 44, Nuevo Leon',
        participants: '444',
        date: '2024-12-31 23:00:00',
        imgUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733722415/bwtkwqi17vy1yil1k01v.jpg',
        game: 'Street Fighter',
        status: 1,
      },
    ];
  }

  getMajorTournaments(): MajorTournament[] {
    return [
      {
        imageUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733618426/byj9y4ep0fdsuolz4r5o.jpg',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733706867/hbnoh8jjznxssplkhhq3.jpg',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/dqhqif9sw/image/upload/v1733706866/g1f5zcphxrytohwlg10k.avif',
      },
    ];
  }
}
