import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { GridElementComponent } from '../grid-element/grid-element.component';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FilterTasksPipe } from '../../pipes/filter-tasks.pipe';

@Component({
  selector: 'app-grid-wrapper',
  standalone: true,
  imports: [GridElementComponent, CommonModule, FilterTasksPipe],
  providers: [],
  templateUrl: './grid-wrapper.component.html',
})
export class GridWrapperComponent implements AfterViewInit {
  tasksService = inject(TasksService);

  @Input() searchTerm: string = '';

  getTasks = () => {
    return this.tasksService.tasks();
  };

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
        container.scrollLeft =
          this.startScrollPosition - (event.clientX - this.touchStartX);
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
