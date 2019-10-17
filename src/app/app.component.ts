import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

export interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private postService: PostService) {}
  postArray: Post[] = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris gravida, congue nisl a, iaculis lacus. Sed arcu tortor, ornare pellentesque suscipit in, mollis commodo quam. Etiam in luctus quam, id euismod ligula. Nullam lobortis dui et varius pulvinar. Etiam at orci id enim rutrum egestas. Proin iaculis eros ut erat mattis cursus sed vitae libero. Integer consequat molestie fringilla. Integer vel massa dictum, aliquam dui et, efficitur nulla. Ut mauris massa, mattis auctor metus eget, mattis sagittis nulla. Donec tincidunt sed eros tincidunt pulvinar. Maecenas consequat elit lectus, eu elementum arcu ultrices molestie. Morbi quis tempor augue, at molestie ipsum. Aenean molestie arcu lectus, a varius mi pulvinar ac. Mauris sollicitudin, dolor non tempor bibendum, ipsum nibh dapibus purus, eu consectetur diam purus vitae turpis. Integer id rutrum metus. Nulla rhoncus tincidunt augue. ",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris gravida, congue nisl a, iaculis lacus. Sed arcu tortor, ornare pellentesque suscipit in, mollis commodo quam. Etiam in luctus quam, id euismod ligula. Nullam lobortis dui et varius pulvinar. Etiam at orci id enim rutrum egestas. Proin iaculis eros ut erat mattis cursus sed vitae libero. Integer consequat molestie fringilla. Integer vel massa dictum, aliquam dui et, efficitur nulla. Ut mauris massa, mattis auctor metus eget, mattis sagittis nulla. Donec tincidunt sed eros tincidunt pulvinar. Maecenas consequat elit lectus, eu elementum arcu ultrices molestie. Morbi quis tempor augue, at molestie ipsum. Aenean molestie arcu lectus, a varius mi pulvinar ac. Mauris sollicitudin, dolor non tempor bibendum, ipsum nibh dapibus purus, eu consectetur diam purus vitae turpis. Integer id rutrum metus. Nulla rhoncus tincidunt augue. ",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon troisième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris gravida, congue nisl a, iaculis lacus. Sed arcu tortor, ornare pellentesque suscipit in, mollis commodo quam. Etiam in luctus quam, id euismod ligula. Nullam lobortis dui et varius pulvinar. Etiam at orci id enim rutrum egestas. Proin iaculis eros ut erat mattis cursus sed vitae libero. Integer consequat molestie fringilla. Integer vel massa dictum, aliquam dui et, efficitur nulla. Ut mauris massa, mattis auctor metus eget, mattis sagittis nulla. Donec tincidunt sed eros tincidunt pulvinar. Maecenas consequat elit lectus, eu elementum arcu ultrices molestie. Morbi quis tempor augue, at molestie ipsum. Aenean molestie arcu lectus, a varius mi pulvinar ac. Mauris sollicitudin, dolor non tempor bibendum, ipsum nibh dapibus purus, eu consectetur diam purus vitae turpis. Integer id rutrum metus. Nulla rhoncus tincidunt augue. ",
      loveIts: 0,
      created_at: new Date()
    }
  ];
  title = 'blog';

  ngOnInit(): void {
    this.postArray.forEach(post => {
      this.postService.postPost(post);
    });

/*     this.postService.postsSubject.subscribe((posts) => {
      this.postArray = posts;
    }); */
  }

}
