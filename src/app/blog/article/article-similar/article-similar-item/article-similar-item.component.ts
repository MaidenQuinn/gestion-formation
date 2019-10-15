import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/blog/shared/article.model';

@Component({
  selector: 'app-article-similar-item',
  templateUrl: './article-similar-item.component.html',
  styleUrls: ['./article-similar-item.component.css']
})
export class ArticleSimilarItemComponent implements OnInit {
  @Input() similarArticle: Article;
  constructor() { }

  ngOnInit() {
  }

}
