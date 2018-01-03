import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../../shared/models/comment'

@Component({
  selector: 'app-blog-comments-show',
  templateUrl: './blog-comments-show.component.html',
  styleUrls: ['./blog-comments-show.component.scss']
})
export class BlogCommentsShowComponent implements OnInit {

  @Input() comment: Comment

  constructor() {}

  ngOnInit() {}

}
