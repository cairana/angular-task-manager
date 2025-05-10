import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task.type';

@Pipe({
  name: 'filterTasks',
  standalone: true,
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string): Task[] {
    if (!searchTerm.length) {
      return tasks;
    }

    const text = searchTerm.toLowerCase();
    return tasks.filter((task) => {
      return (
        task.name.toLowerCase().includes(text) ||
        task.status.toLowerCase().includes(text)
      );
    });
  }
}
