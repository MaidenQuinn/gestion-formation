import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tag } from '../../shared/tag.model';
import { TagService } from '../../shared/tag.service';

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.css']
})
export class BlogTagsComponent implements OnInit {
  public tagItems: Tag[];
  public selectedTags: Tag[] = [];
  @Output() tag: EventEmitter<any> = new EventEmitter();


  constructor(public tagService: TagService
  ) { }

  getTagList() {
    this.tagService.getTagsList()
      .subscribe(data => {
        this.tagItems = data;
      });
  }

  public getBackgroundColor(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      return tag.color;
    } else { return 'white'; }
  }

  public getColor(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      return 'white';
    } else { return tag.color; }
  }

  public getBorderColor(tag: Tag) {
    return '1px solid ' + tag.color;
  }

public selectTag(tag: Tag) {
    const filters: Tag[] = [];
    const index = this.selectedTags.indexOf(tag);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.selectedTags.forEach(t => filters.push(t));
    this.tag.emit(filters);
  }

  ngOnInit() {
    this.getTagList();
  }

}
