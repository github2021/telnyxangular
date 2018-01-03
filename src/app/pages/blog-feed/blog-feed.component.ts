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
  option = new FormControl('newest');

  sortingOptions = [
    { value: 'sort-0', viewValue: 'Newest' },
    { value: 'sort-1', viewValue: 'Oldest' }
  ];

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
    })
  }

}
