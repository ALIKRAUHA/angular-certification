import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../app.component';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postArray: Post[] = [];
  postsSubject = new BehaviorSubject<Post[]>(null);

  constructor() { }

  postPost(post: Post) {
    this.postArray.push(post);
    this.postsSubject.next(this.postArray);
  }

  suppressPost(post: Post) {
    let index = this.postArray.findIndex(postOfArray => {
      if (postOfArray == post) {
        return true;
      } else {
        return false;
      }
    });
    if (index >= 0) {
      this.postArray.splice(index, 1);
    }
  }

  changePostArray(posts: Post[]) {
     this.postArray = posts;
     this.postsSubject.next(posts);
  }
}
