import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAutoScroll]',
})
export class AutoScrollDirective implements AfterViewInit {
  @Input() scrollDistance: number = 800;
  @Input() scrollDuration: number = 800;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.autoScroll();
  }

  autoScroll() {
    const element = this.elementRef.nativeElement;

    element.scrollTo({
      left: this.scrollDistance,
      behavior: 'smooth',
    });

    setTimeout(() => {
      element.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }, this.scrollDuration);
  }
}
