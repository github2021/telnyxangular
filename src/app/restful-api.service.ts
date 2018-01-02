import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Blog } from './shared/models/blog'
import { Comment } from './shared/models/comment'

const API_URL = "http://localhost:9001"

@Injectable()
export class RestfulApiService {

  constructor(private http: HttpClient) {}

  private sortBlogsByDate(a, b) {
    return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime();
  }
  public getBlogs() {
    return this.http.get < Blog[] > (`${API_URL}/posts`).pipe(map(x => x.sort(this.sortBlogsByDate)))
  }
  public getBlog(id: number) {
    return this.http.get < Blog > (`${API_URL}/posts/${id}`)
  }

  public getBlogComments(id: number) {
  	return this.http.get <Comment[]> (`${API_URL}/comments?postId=${id}`)
  }

}
