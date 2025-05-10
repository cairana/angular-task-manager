import { Component, OnInit } from '@angular/core';
import { GridWrapperComponent } from '../grid-wrapper/grid-wrapper.component';
import { Task } from '../../model/task.type';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-grid',
  imports: [GridWrapperComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent implements OnInit {
  title = 'angular-task-manager';


    tasks!: Task[];
  
    constructor(private tasksService: TasksService) {
      console.log('tasksService injected:', this.tasksService);
    }
  
    ngOnInit() {
      this.tasks = this.tasksService.tasks();
  
      console.log(
        'TasksService method existence in app-grid: ',
        typeof this.tasksService.deleteTask
      );
        console.log(
        'TasksService deleteTask in app-grid: ',
        this.tasksService?.deleteTask
      );
    }
  // tasks$;

  // constructor(private taskService: TaskService) {
  //   this.tasks$ = this.taskService.tasks$;
  //   console.log('tasksService injected:', this.taskService);
  // }

  // addTask(name: string, description: string) {
  //   const newTask: Task = {
  //     id: Date.now(),
  //     name: name,
  //     description: description,
  //     created: new Date().toISOString(),
  //     status: 'todo',
  //   };
  //   this.taskService.addTask(newTask);
  // }

  // updateTask(task: Task, status: TaskStatus) {
  //   this.taskService.updateTask({ ...task, status });
  // }

  // onClickDelete(taskId: number) {
  //   console.log('deleteTaskXXX: ', taskId);
  //   console.log('this.tasksService.deleteTask', this.taskService.deleteTask);
  //   this.taskService.deleteTask(taskId);
  // }
}
