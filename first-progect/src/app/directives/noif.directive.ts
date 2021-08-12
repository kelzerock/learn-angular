import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNoif]'
})
export class NoifDirective {

  @Input('appNoif') set ifNot(condition: boolean){
    if(!condition){
      //see element
      this.viewConteiner.createEmbeddedView(this.templateRef)
    } else {
      this.viewConteiner.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>,
    private viewConteiner: ViewContainerRef) { }

}
