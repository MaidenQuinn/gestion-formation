import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../shared/article.model';

@Component({
  selector: 'app-most-popular-item',
  templateUrl: './most-popular-item.component.html',
  styleUrls: ['./most-popular-item.component.css']
})
export class MostPopularItemComponent implements OnInit {
  @Input() mostPopularItem: Article;
  constructor() { }

  ngOnInit() {
  }

}
