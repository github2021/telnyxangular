import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentsPostComponent } from './blog-comments-post.component';

describe('BlogCommentsPostComponent', () => {
  let component: BlogCommentsPostComponent;
  let fixture: ComponentFixture<BlogCommentsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
