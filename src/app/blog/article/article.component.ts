import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { BlogService } from '../shared/blog.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public article: Article;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  getArticleContent() {
    const id = this.route.snapshot.params['id'];
    this.blogService.getArticle(id)
      .subscribe(data => {
        this.article = data;
      });
  }

  ngOnInit() {
    this.getArticleContent();
  }
}
