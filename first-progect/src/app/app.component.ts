import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    { title: 'need learn angular', text: 'i learn angular', id: 1 },
    { title: 'need learn react', text: 'i learn react', id: 2 },
    { title: 'what do you do', text: 'Hello, what happend?', id: 3}
  ];

  ngOnInit():void {
    setTimeout(() => {
      console.log('timeout')
      this.posts[0] = {
        title: 'Changed',
        text: 'HAHAH',
        id: 4
      }
    }, 2000);
  }

  updatePost(post: Post){
    this.posts.unshift(post);
    console.log(post)
  }
}
