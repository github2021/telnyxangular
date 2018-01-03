import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material'
import { Title } from '@angular/platform-browser'
import { FormControl } from '@angular/forms'

import { RestfulApiService } from '../../restful-api.service'
import { Blog } from '../../shared/models/blog'

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss']
})
export class BlogFeedComponent implements OnInit {

  blogs: Blog[]
  option = new FormControl('newest')

  constructor(
    private restfulAPIService: RestfulApiService,
    private title: Title
  ) {}

  sortBlogs() {
    this.blogs.reverse()
  }

  ngOnInit() {
    this.title.setTitle("Blog Feed")
    this.getBlogs()
  }

  getBlogs() {
    this.restfulAPIService.getBlogs().subscribe(data => {
      this.blogs = data
    })
  }

}
