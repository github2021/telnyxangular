import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeedSummaryComponent } from './blog-feed-summary.component';

describe('BlogFeedSummaryComponent', () => {
  let component: BlogFeedSummaryComponent;
  let fixture: ComponentFixture<BlogFeedSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFeedSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
