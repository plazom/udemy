import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive(
    {
        selector: '[appBackground]'
    }
)
export class BackgroundDirective implements OnInit {
    @HostBinding('style.backgroundColor') bacground: string;
    
    constructor(private element: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {
    }

    @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
        // this.renderer.addClass(nativeElement, 'white-text');
        this.bacground = 'red';
    }

    @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
        // this.renderer.removeClass(nativeElement, 'white-text');
        this.bacground = 'transparent';
    }

}