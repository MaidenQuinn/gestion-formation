import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article-note',
  templateUrl: './article-note.component.html',
  styleUrls: ['./article-note.component.css']
})
export class ArticleNoteComponent implements OnInit {

  constructor() { }

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

}
