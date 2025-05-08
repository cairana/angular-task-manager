import { Injectable } from '@angular/core';
import { MOCK_TASKS } from '../../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks() {
    return MOCK_TASKS
  }
}
