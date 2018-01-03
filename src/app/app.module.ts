import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { CdkTableModule } from '@angular/cdk/table'
import { MatButtonModule } from '@angular/material/button'
import {
  MatExpansionModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  MatListModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogFeedComponent } from './pages/blog-feed/blog-feed.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogCommentsShowComponent } from './pages/blog/comments/blog-comments-show/blog-comments-show.component';
import { BlogCommentsPostComponent } from './pages/blog/comments/blog-comments-post/blog-comments-post.component';
import { BlogCommentsPostShowErrorsComponent } from './pages/blog/comments/blog-comments-post-show-errors/blog-comments-post-show-errors.component';

import { RestfulApiService } from './restful-api.service'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    BlogFeedComponent,
    BlogComponent,
    BlogCommentsShowComponent,
    BlogCommentsPostComponent,
    BlogCommentsPostShowErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    CdkTableModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule


  ],
  providers: [RestfulApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
