import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntroComponent } from '../intro/intro.component';

@Component({
  selector: 'app-future',
  standalone: true,
  imports: [  ],
  templateUrl: './future.component.html',
  styleUrl: './future.component.css'
})
export class FutureComponent {
  

  moveButton(): void {
    const x = Math.random() * (window.innerWidth - document.getElementById('noButton')!.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - document.getElementById('noButton')!.offsetHeight) - 48;
    document.getElementById('noButton')!.style.left = `${x}px`;
    document.getElementById('noButton')!.style.top = `${y}px`;
  }

  nextPage(): void {
    window.location.href = './intro';
  }
}