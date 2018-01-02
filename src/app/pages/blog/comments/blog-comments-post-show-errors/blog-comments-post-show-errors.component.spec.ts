import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentsPostShowErrorsComponent } from './blog-comments-post-show-errors.component';

describe('BlogCommentsPostShowErrorsComponent', () => {
  let component: BlogCommentsPostShowErrorsComponent;
  let fixture: ComponentFixture<BlogCommentsPostShowErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentsPostShowErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentsPostShowErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
