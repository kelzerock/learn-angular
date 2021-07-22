import { Component } from '@angular/core'

@Component({
  selector: 'app-post4',
  template: `
  <div class="post4">
    <h2>Post4 title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae iure vitae eligendi delectus.</p>
  </div>
  `,
  styles: [
`    .post4 {
      padding: .5rem;
      border: solid black 2px;

      h2 {
        font-weight: 600;
      }
    }`
  ]
})
export class Post4Component{

}
