import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { RestfulApiService } from '../../restful-api.service'
import { Blog } from '../../shared/models/blog'
import { Comment } from '../../shared/models/comment'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogId: number
  blog$: Observable < Blog >
    comments: Comment[]
  commentSent: boolean

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restfulAPIService: RestfulApiService
  ) {}

  ngOnInit() {
    this.title.setTitle("Blog")

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.blogId = Number(params.get('id'))
        this.getBlog()

      }
    })

  }

  getBlog() {
    this.blog$ = this.restfulAPIService.getBlog(this.blogId)
    this.restfulAPIService.getBlogComments(this.blogId).subscribe(data => {
      console.log("comments", data)
      this.comments = data

    })
  }

  getBlogComments() {
    this.restfulAPIService.getBlogComments(this.blogId)
  }

  commentSentFunction(x: any) {
    console.log(x)

  }

  commentSuccessful() {
    this.commentSent = true

  }

}
