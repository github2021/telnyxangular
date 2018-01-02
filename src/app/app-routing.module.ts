import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { BlogFeedComponent } from './pages/blog-feed/blog-feed.component'
import { BlogComponent } from './pages/blog/blog.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog-feed', component: BlogFeedComponent },
  { path: 'blog-feed/blog/:id', component: BlogComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
