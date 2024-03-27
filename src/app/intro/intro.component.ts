import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Get all image containers and arrows
      const imageContainers = document.querySelectorAll('.image-container');
      const arrows = document.querySelectorAll('.graph__wrapper');

      // Calculate the distance between elements
      for (let i = 0; i < imageContainers.length - 1; i++) {
        const currentElement = imageContainers[i] as HTMLElement;
        const nextElement = imageContainers[i + 1] as HTMLElement;

        const distance = nextElement.offsetTop - (currentElement.offsetTop + currentElement.offsetHeight);

        // Adjust arrow position
        const arrow = arrows[i] as HTMLElement;
        arrow.style.top = `${currentElement.offsetTop + currentElement.offsetHeight / 2}px`;
        arrow.style.height = `${distance}px`;
      }

      // Additional calculations or adjustments as needed
    }
  }
}
