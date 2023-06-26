import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[guessmynumberMessage]'
})
export class MessageDirective{

  constructor(private element: ElementRef, private renderer: Renderer2) { }



}
