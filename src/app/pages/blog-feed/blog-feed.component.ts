import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

import { RestfulApiService } from '../../restful-api.service'
import { Blog } from '../../shared/models/blog'

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss']
})
export class BlogFeedComponent implements OnInit {

  blogs: Blog[]

  constructor(
    private restfulAPIService: RestfulApiService,
    private title: Title) {}

  ngOnInit() {
  	this.title.setTitle("Blog Feed")
  	this.getBlogs()
  }

  getBlogs() {
    this.restfulAPIService.getBlogs().subscribe(data => {
      this.blogs = data
      console.log(data)
    })
  }

}
