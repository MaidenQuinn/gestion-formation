import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import { Article } from '../../shared/article.model';
import { Tag } from '../../shared/tag.model';
import { TagContentType } from '@angular/compiler';
import { ArticleContentComponent } from '../article-content/article-content.component';

@Component({
  selector: 'app-article-similar',
  templateUrl: './article-similar.component.html',
  styleUrls: ['./article-similar.component.css']
})
export class ArticleSimilarComponent implements OnInit {
  @Input() article: Article;
  similarArticles: Article[];

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.blogService.getArticlesList().subscribe(data => {
      this.similarArticles = this.getSimilarArticles(data, 3);
    });
  }

  /**
   * Trouve *limit* articles similaires à this.article dans le tableau d'articles envoyé en paramètre
   * @param allArticles Une liste d'articles pouvant être suggérés comme similaires
   * @param limit Nombre maximum d'articles renvoyés par la fonction
   */
  private getSimilarArticles(allArticles: Article[], limit: number) {

    const result: Article[] = [];

    const articleTags: Tag[] = this.article.tags;
    let i = 0;

    while (result.length < 3 && i < articleTags.length) {
      const matchingArticles: Article[] = allArticles.filter((art: Article) => art.tags.map((t: Tag) => t.id).includes(articleTags[i].id));

      for (const article of matchingArticles) {
        if (!result.includes(article) && this.article.id !== article.id) {
          result.push(article);
        }
      }

      i++;
    }

    return result.splice(0, limit);
  }

}
