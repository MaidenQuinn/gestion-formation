import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tag } from '../shared/tag.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  toto: Tag[];
  // @Output() selectedTags: EventEmitter<any> = new EventEmitter();
  constructor() { }

  addTodo($event) {
    this.toto = $event;
    // console.log(this.toto);
    // this.selectedTags.emit(this.toto);
  }

  ngOnInit() {
  }

}
