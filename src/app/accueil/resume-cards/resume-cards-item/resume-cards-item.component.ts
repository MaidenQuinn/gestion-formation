import { Component, OnInit, Input } from '@angular/core';
import { ResumeCard } from '../shared/resume-card.model';

@Component({
  selector: 'app-resume-cards-item',
  templateUrl: './resume-cards-item.component.html',
  styleUrls: ['./resume-cards-item.component.css']
})
export class ResumeCardsItemComponent implements OnInit {

  @Input() resumeCard: ResumeCard;
  constructor() { }

  ngOnInit() {
  }

}
