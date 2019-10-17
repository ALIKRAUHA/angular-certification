import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../app.component';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  postList: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.postsSubject.subscribe(
      (posts) => {
        this.postList = posts;
        console.log('on init');
      }
    );
  }

  ngOnDestroy() {
    this.postService.changePostArray(this.postList);
  }

}
