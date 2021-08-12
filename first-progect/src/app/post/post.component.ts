import { Component, ContentChild, Input, OnInit, ElementRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  @Input() myPost: Post = {
    title: '',
    text: '',
    id: 1
  }
  @ContentChild('info', {static: true}) infoRef!:ElementRef

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
  }


}
