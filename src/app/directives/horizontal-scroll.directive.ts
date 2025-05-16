import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
  standalone: true,
})
export class HorizontalScrollDirective {
  @Input() swipeThreshold = 50;
  touchStartX = 0;
  touchEndX = 0;
  isDragging = false;
  isScrolling = false;
  startScrollPosition = 0;
  scrollTimeout: any = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth >= 640) {
      this.el.nativeElement.scrollLeft = 0;
      this.el.nativeElement.style.height = '';
    } else {
      this.el.nativeElement.style.height = '';
    }
  }
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (this.isScrolling) return;
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (this.isScrolling) return;
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isScrolling) return;
    this.isDragging = true;
    this.touchStartX = event.clientX;
    this.startScrollPosition = this.el.nativeElement.scrollLeft;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && !this.isScrolling) {
      this.el.nativeElement.scrollLeft =
        this.startScrollPosition - (event.clientX - this.touchStartX);
    }
  }

  @HostListener('scroll')
  onScroll() {
    if (this.isScrolling) {
      this.isDragging = false;
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }
  }

  handleSwipe() {
    const container = this.el.nativeElement;
    const scrollAmount = window.innerWidth - (26 + 16) * 2;

    if (this.touchEndX < this.touchStartX - this.swipeThreshold) {
      this.isScrolling = true;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (this.touchEndX > this.touchStartX + this.swipeThreshold) {
      this.isScrolling = true;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}
