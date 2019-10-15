import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoteComponent } from './article-note.component';

describe('ArticleNoteComponent', () => {
  let component: ArticleNoteComponent;
  let fixture: ComponentFixture<ArticleNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
