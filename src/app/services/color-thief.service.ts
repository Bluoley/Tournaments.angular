import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import ColorThief from 'colorthief';

@Injectable({
  providedIn: 'root',
})
export class ColorThiefService {
  private colorThief!: ColorThief;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.colorThief = new ColorThief();
    }
  }

  // async getDominantColor(imageSrc: string): Promise<number[] | null> {
  //   if (!isPlatformBrowser(this.platformId)) {
  //     return null;
  //   }

  //   const image = await this.loadImage(imageSrc);
  //   return this.colorThief.getColor(image);
  // }

  async getPalette(
    imageSrc: string,
    colorCount: number
  ): Promise<number[][] | null> {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const image = await this.loadImage(imageSrc);
    return this.colorThief.getPalette(image, colorCount);
  }

  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Avoid CORS issues
      img.src = src;

      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  }
}
