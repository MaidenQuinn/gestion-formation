// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/article.model';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-most-popular-list',
  templateUrl: './most-popular-list.component.html',
  styleUrls: ['./most-popular-list.component.css']
})
export class MostPopularListComponent implements OnInit {
  mostPopularItems: Article[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getArticlesList()
      .subscribe(data => {
        data.sort((article1, article2) => article2.note - article1.note);
        data.splice(3);
        this.mostPopularItems = data;
      });
  }

}
