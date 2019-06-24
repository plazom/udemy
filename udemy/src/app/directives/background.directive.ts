import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive(
    {
        selector: '[appBackground]'
    }
)
export class BackgroundDirective implements OnInit {
    @Input('appBackground') hoverColor:string = 'green';
    @Input() defaultColor:string = 'transparent';
    @HostBinding('style.backgroundColor') bacground: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {
        this.bacground = this.defaultColor;
    }

    @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
        // this.renderer.addClass(nativeElement, 'white-text');
        this.bacground = this.hoverColor;
    }

    @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
        // this.renderer.removeClass(nativeElement, 'white-text');
        this.bacground = this.defaultColor;
    }

}