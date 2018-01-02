import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestfulApiService } from '../../../../restful-api.service'
import { NgForm } from '@angular/forms'

import { Comment } from '../../../../shared/models/comment'

@Component({
  selector: 'app-blog-comments-post',
  templateUrl: './blog-comments-post.component.html',
  styleUrls: ['./blog-comments-post.component.scss']
})
export class BlogCommentsPostComponent implements OnInit {

  @Input() blogId: number
  @Output() comment: EventEmitter < Comment > = new EventEmitter < Comment > ()
  @Output() success: EventEmitter < boolean > = new EventEmitter < boolean > ()
  private newComment: NgForm


  constructor(private restfulApiService: RestfulApiService) {}

  ngOnInit() {}

  postComment(newComment: NgForm) {

    this.newComment = newComment
    this.newComment.controls.content.markAsTouched()
    this.newComment.controls.user.markAsTouched()

    if (newComment.valid) {

      const commentToBeSent = new Comment()
      commentToBeSent.postId = this.blogId
      commentToBeSent.parent_id = null
      commentToBeSent.user = newComment.value.user
      commentToBeSent.content = newComment.value.content
      commentToBeSent.date = this.getCurrentDate()

      this.comment.emit(commentToBeSent)
      this.restfulApiService.postComment(commentToBeSent).subscribe()
      this.success.emit(true)
      this.newComment.reset()

    }

  }

private getCurrentDate(): string {  const date = new Date(); return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`}


}
