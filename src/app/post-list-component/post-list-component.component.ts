import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() postList: Post[];

  constructor() { }

  ngOnInit() {
  }

}
