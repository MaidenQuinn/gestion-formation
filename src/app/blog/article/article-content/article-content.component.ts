import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../shared/article.model';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  @Input() article: Article;
  constructor() {
  }

  ngOnInit() {
  }

}
