import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentsShowComponent } from './blog-comments-show.component';

describe('BlogCommentsShowComponent', () => {
  let component: BlogCommentsShowComponent;
  let fixture: ComponentFixture<BlogCommentsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
