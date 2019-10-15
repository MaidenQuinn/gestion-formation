import { Component, OnInit } from '@angular/core';
import { ResumeCard } from './shared/resume-card.model';

@Component({
  selector: 'app-resume-cards',
  templateUrl: './resume-cards.component.html',
  styleUrls: ['./resume-cards.component.css']
})
export class ResumeCardsComponent implements OnInit {
  resumeCards: ResumeCard[] = [
    { imageUrl: '/assets/img/361.jpg', titre: 'Mobile', description: 'Déplacements partout en france' },
    { imageUrl: '/assets/img/694.jpg', titre: 'Personnalisable', description: 'Formation d\'un ou plusieurs employés' },
    { imageUrl: '/assets/img/5559.jpg', titre: 'E-learning', description: 'Cours en ligne disponible pour tous' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
