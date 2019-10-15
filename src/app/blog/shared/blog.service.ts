import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:9000/api/article';

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  getArticlesList(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}`);
  }
}
