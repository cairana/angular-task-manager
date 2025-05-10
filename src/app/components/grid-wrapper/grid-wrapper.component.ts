import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Task, TaskStatus } from '../../model/task.type';
import { GridElementComponent } from '../grid-element/grid-element.component';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-wrapper',
  standalone: true,
  imports: [GridElementComponent, CommonModule],
  providers: [],
  templateUrl: './grid-wrapper.component.html',
  styleUrl: './grid-wrapper.component.css',
})
export class GridWrapperComponent implements AfterViewInit {
  tasksService = inject(TasksService);

  addTask = (name: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      name: name,
      description: description,
      created: new Date().toISOString(),
      status: 'todo',
    };
    this.tasksService?.addTask(newTask);
  };

  updateTask = (task: Task, status: TaskStatus) => {
    this.tasksService?.updateTask({ ...task, status });
  };

  onClickDelete = (taskId: number) => {
    console.log('deleteTaskXXX: ', taskId);
    console.log('this.tasksService:', this.tasksService);
    console.log('this.tasksService.deleteTask:', this.tasksService?.deleteTask);

    this.tasksService?.deleteTask(taskId);
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

// Here’s how you can ensure onClickDelete works correctly:

// Use an arrow function to preserve the context:

// Ensure correct template binding:

// If passing the method to a child component:

// By ensuring the context (this) is preserved and the method is correctly bound, the issue with this.tasksService being undefined in onClickDelete should be resolved. Let me know if you need further clarification!
