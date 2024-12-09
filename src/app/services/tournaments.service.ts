import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  constructor() {}

  getMajorTournaments() {
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
