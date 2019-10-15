// tslint:disable: max-line-length
import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { Article } from '../../shared/article.model';
import { BlogService } from '../../shared/blog.service';
import { PageEvent, MatPaginator } from '@angular/material';
import { Tag } from '../../shared/tag.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {
  public articleItems: Article[];
  public tagItems: Tag[];
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public pageSizeOptions: number[] = [5, 10, 25];
  public pageEvent: PageEvent;
  public activePageDataChunk: Article[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() selectedTags: Tag[];

  constructor(private blogService: BlogService) { }

  public handlePage(e: any) {
    const firstCut = e.pageIndex * e.pageSize;
    const secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.articleItems.slice(firstCut, secondCut);
    window.scroll(0, 300);
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  getArticleList() {
    this.blogService.getArticlesList()
      .subscribe(data => {
        this.articleItems = data;
        this.articleItems = this.articleItems.reverse();
        this.articleItems.sort((a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime());
        this.totalSize = this.articleItems.length;
        this.activePageDataChunk = this.articleItems.slice(0, this.pageSize);
      });
  }

  filterArticle() {
    if (this.articleItems !== undefined) {
      const filteredArticles = this.articleItems.filter(article => {
        const tagIds = article.tags.map(t => t.id);
        // console.log(article.tags);
        if (this.selectedTags !== undefined) {
          if (this.selectedTags.length === 0) {
            return true;
          }
          for (const selectedTag of this.selectedTags) {
            if (!tagIds.includes(selectedTag.id)) {
              return false;
            }
          }
        }
        return true;
      });

      this.activePageDataChunk = filteredArticles.slice(0, this.pageSize);
      this.currentPage = 0;
      this.paginator.pageIndex = 0;
      this.totalSize = filteredArticles.length;
    }
  }

  ngOnInit() {
    this.getArticleList();
  }

  ngOnChanges(): void {
    this.filterArticle();
  }
}
