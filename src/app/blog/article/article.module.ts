import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleShareComponent } from './article-share/article-share.component';
import { ArticleSimilarComponent } from './article-similar/article-similar.component';
import { ArticleSimilarItemComponent } from './article-similar/article-similar-item/article-similar-item.component';
import { ArticleNoteComponent } from './article-note/article-note.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        ArticleComponent,
        ArticleContentComponent,
        ArticleShareComponent,
        ArticleSimilarComponent,
        ArticleNoteComponent,
        ArticleSimilarItemComponent,
    ],
    imports: [
        SharedModule,
    ]
})
export class ArticleModule { }
