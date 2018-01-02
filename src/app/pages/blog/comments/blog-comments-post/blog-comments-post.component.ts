import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-comments-post',
  templateUrl: './blog-comments-post.component.html',
  styleUrls: ['./blog-comments-post.component.scss']
})
export class BlogCommentsPostComponent implements OnInit {

  @Input() blogId: number
  @Output() comment: EventEmitter < Comment > = new EventEmitter<Comment>()
  @Output() success: EventEmitter < boolean > = new EventEmitter<boolean>()

    constructor() {}

  ngOnInit() {
  }

  emitthis() {
  	  	//this.bob.emit(34898934984)
  	  	//console.log("kslksdkldslk")
  	  	let comment = new Comment()
  	  	this.comment.emit(comment)
  	  	this.success.emit(true)
  }

}
