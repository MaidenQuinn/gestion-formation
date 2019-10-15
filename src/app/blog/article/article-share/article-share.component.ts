import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-share',
  templateUrl: './article-share.component.html',
  styleUrls: ['./article-share.component.css']
})
export class ArticleShareComponent implements OnInit {

  route: String;

  constructor(private location: Location) { }

  ngOnInit() {
    this.route = location.origin + this.location.path();
  }
}
