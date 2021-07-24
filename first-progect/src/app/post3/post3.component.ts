import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss']
})
export class Post3Component implements OnInit {
  toggleButton = true;
  arr = [1, 2, 3, 5, 8, 13]
  obj = [
    {title: 'post1', autor: 'Aleksei', comments: [
      {name: 'Max', comment: 'lorem5'},
      {name: 'Max', comment: 'lorem5'},
      {name: 'Max', comment: 'lorem5'}
    ]},
    {title: 'post1', autor: 'Aleksei2', comments: [
      {name: 'Max', comment: 'lorem5'},
      {name: 'Max', comment: 'lorem5'},
      {name: 'Max', comment: 'lorem5'}
    ]
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
