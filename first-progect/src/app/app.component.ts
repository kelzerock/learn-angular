import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic style';
  number = [44, 34 , 43, 43];

  obj = {a: 'hello', b: 'aleksei'}
  inputValue = ''


  constructor(){

  }
  onInput(event: Event ){
    // console.log(event)
    if(event!== null){
      this.inputValue = (<HTMLInputElement>event.target).value

    }

  }

}
