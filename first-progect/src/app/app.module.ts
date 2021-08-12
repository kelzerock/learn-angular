
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { NoifDirective } from './directives/noif.directive';





@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    NoifDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
