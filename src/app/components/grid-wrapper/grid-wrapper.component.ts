import { AfterViewInit, Component, ElementRef, input, ViewChild } from '@angular/core';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-grid-wrapper',
  imports: [],
  templateUrl: './grid-wrapper.component.html',
  styleUrl: './grid-wrapper.component.css'
})
export class GridWrapperComponent implements AfterViewInit {


  tasks = input.required<Task[]>()

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  touchStartX = 0;
  touchEndX = 0;
  isDragging = false;
  startScrollPosition = 0;

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    // Touch gesture events
    container.addEventListener('touchstart', (event: TouchEvent) => {
      this.touchStartX = event.touches[0].clientX;
    });

    container.addEventListener('touchend', (event: TouchEvent) => {
      this.touchEndX = event.changedTouches[0].clientX;
      this.handleSwipe();
    });

    // Mouse drag events for desktop support
    container.addEventListener('mousedown', (event: MouseEvent) => {
      this.isDragging = true;
      this.touchStartX = event.clientX;
      this.startScrollPosition = container.scrollLeft;
    });

    container.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    container.addEventListener('mousemove', (event: MouseEvent) => {
      if (this.isDragging) {
        container.scrollLeft = this.startScrollPosition - (event.clientX - this.touchStartX);
      }
    });
  }

  handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = window.innerWidth; // Scroll one full viewport width

    if (this.touchEndX < this.touchStartX - threshold) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (this.touchEndX > this.touchStartX + threshold) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}
