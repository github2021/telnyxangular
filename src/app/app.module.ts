import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogFeedComponent } from './pages/blog-feed/blog-feed.component';
import { BlogFeedSummaryComponent } from './pages/blog-feed/blog-feed-summary/blog-feed-summary.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogCommentsShowComponent } from './pages/blog/comments/blog-comments-show/blog-comments-show.component';
import { BlogCommentsPostComponent } from './pages/blog/comments/blog-comments-post/blog-comments-post.component';
import { BlogCommentsPostShowErrorsComponent } from './pages/blog/comments/blog-comments-post-show-errors/blog-comments-post-show-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    BlogFeedComponent,
    BlogFeedSummaryComponent,
    BlogComponent,
    BlogCommentsShowComponent,
    BlogCommentsPostComponent,
    BlogCommentsPostShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
