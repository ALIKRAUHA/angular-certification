import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;

  constructor(
  ) { }

  ngOnInit() {}

  addLike() {
    this.post.loveIts += 1;
  }

  addDisLike() {
    this.post.loveIts -= 1;
  }

}
