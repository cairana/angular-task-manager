import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSelectorComponent } from './status-selector.component';
import { TasksService } from '../../services/tasks.service';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { StatusSelection, Task } from '../../model/task.type';
import { TaskStatus } from '../../model/status.types';
import { By } from '@angular/platform-browser';

describe('StatusSelectorComponent', () => {
  let component: StatusSelectorComponent;
  let fixture: ComponentFixture<StatusSelectorComponent>;
  let tasksServiceSpy: jasmine.SpyObj<TasksService>;
  let toastServiceSpy: jasmine.SpyObj<ToastService>;

  beforeEach(async () => {
    tasksServiceSpy = jasmine.createSpyObj('TasksService', ['updateTask']);
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['showToast']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, StatusSelectorComponent],
      providers: [
        { provide: TasksService, useValue: tasksServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusSelectorComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 'test',
      name: 'testName',
      description: 'test description',
      created: '2025-05-04T15:00:00Z',
      status: 'todo' as TaskStatus,
    } as Task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate status options correctly', () => {
    const selectElement = fixture.debugElement.query(
      By.css('select')
    ).nativeElement;
    expect(selectElement.children.length).toBe(StatusSelection.length);
  });

  it('should disable the currently selected status', () => {
    const options = fixture.debugElement.queryAll(By.css('option'));
    options.forEach((option) => {
      if (option.nativeElement.value === component.task.status) {
        expect(option.nativeElement.disabled).toBeTrue();
      }
    });
  });

  it('should update task status on selection change', () => {
    const selectElement = fixture.debugElement.query(
      By.css('select')
    ).nativeElement;
    selectElement.value = 'inProgress';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(tasksServiceSpy.updateTask).toHaveBeenCalledWith(
      jasmine.objectContaining({ status: 'inProgress' })
    );
    expect(toastServiceSpy.showToast).toHaveBeenCalledWith(
      `Task moved to ${
        StatusSelection.find((s) => s.id === 'inProgress')?.displayText
      }`,
      jasmine.any(String)
    );
  });
});
