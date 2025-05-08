import { AfterViewInit, Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { Task } from '../../model/task.type';
import { GridElementComponent } from '../grid-element/grid-element.component';

@Component({
  selector: 'app-grid-wrapper',
  standalone: true,
  imports: [GridElementComponent],
  templateUrl: './grid-wrapper.component.html',
  styleUrl: './grid-wrapper.component.css'
})
export class GridWrapperComponent implements AfterViewInit {

  @Input() tasks: Task[] = [];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  touchStartX = 0;
  touchEndX = 0;
  isDragging = false;
  startScrollPosition = 0;

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    container.addEventListener('touchstart', (event: TouchEvent) => {
      this.touchStartX = event.touches[0].clientX;
    });

    container.addEventListener('touchend', (event: TouchEvent) => {
      this.touchEndX = event.changedTouches[0].clientX;
      this.handleSwipe();
    });

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
    const threshold = 50;
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = window.innerWidth;

    if (this.touchEndX < this.touchStartX - threshold) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (this.touchEndX > this.touchStartX + threshold) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}
