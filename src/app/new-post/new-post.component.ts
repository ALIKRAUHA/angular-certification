import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {

  postArray: Post[];

  newPostForm = this.builder.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  constructor(
    private builder: FormBuilder,
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
    this.postService.postsSubject.subscribe(
      (posts) => {
        this.postArray = posts;
      }
    );
  }

  ngOnDestroy() {
    console.log('on destroy');
    this.postService.changePostArray(this.postArray);
  }


  createPost() {
    const post: Post = {
      title: this.newPostForm.value['title'],
      content: this.newPostForm.value['content'],
      loveIts: 0,
      created_at: new Date()
    };
    this.postArray.push(post);
    this.postService.changePostArray(this.postArray);
    this.router.navigate(['']);
  }
}
