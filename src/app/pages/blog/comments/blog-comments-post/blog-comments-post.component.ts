import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RestfulApiService } from '../../../../restful-api.service'
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material'

import { Comment } from '../../../../shared/models/comment'

@Component({
  selector: 'app-blog-comments-post',
  templateUrl: './blog-comments-post.component.html',
  styleUrls: ['./blog-comments-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogCommentsPostComponent implements OnInit {

  @Input() blogId: number
  @Output() comment: EventEmitter < Comment > = new EventEmitter < Comment > ()
  private newComment: NgForm


  constructor(private restfulApiService: RestfulApiService,
    public matSnackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar() {
    this.matSnackBar.open("Comment has been posted", null, {
      duration: 2000,
      extraClasses: ['snackbar']
    })
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep(valid: any) {
    if (valid) this.step++;
  }

  prevStep() {
    this.step--;
  }


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
      this.newComment.reset()
      this.openSnackBar()
      this.step = 3

    }

  }

  private getCurrentDate(): string { const date = new Date(); return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}` }


}
