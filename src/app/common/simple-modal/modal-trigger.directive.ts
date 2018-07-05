import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Directive({
  selector: '[modalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input() modalTrigger:string;

  constructor(public elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) { 
    this.el = elRef.nativeElement;
   }

  ngOnInit(){
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalTrigger}`).modal({})
    })
  }

}
