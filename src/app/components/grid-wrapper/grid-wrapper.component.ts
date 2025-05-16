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
import { HorizontalScrollDirective } from '../../directives/horizontal-scroll.directive';

@Component({
  selector: 'app-grid-wrapper',
  standalone: true,
  imports: [
    GridElementComponent,
    CommonModule,
    FilterTasksPipe,
    HorizontalScrollDirective,
  ],
  providers: [],
  templateUrl: './grid-wrapper.component.html',
})
export class GridWrapperComponent {
  tasksService = inject(TasksService);

  @Input() searchTerm: string = '';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
}
