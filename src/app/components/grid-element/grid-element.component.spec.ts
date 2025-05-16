import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridElementComponent } from './grid-element.component';
import { ModalService } from '../../services/modal.service';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusSelectorComponent } from '../status-selector/status-selector.component';
import { ButtonComponent } from '../button/button.component';
import { TrashIconComponent } from '../../icons/trash-icon.component';
import { Task } from '../../model/task.type';
import { By } from '@angular/platform-browser';

describe('GridElementComponent', () => {
  let component: GridElementComponent;
  let fixture: ComponentFixture<GridElementComponent>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    modalServiceSpy = jasmine.createSpyObj('ModalService', ['showDeleteModal']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        DatePipe,
        StatusSelectorComponent,
        ButtonComponent,
        TrashIconComponent,
        GridElementComponent,
      ],
      providers: [{ provide: ModalService, useValue: modalServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(GridElementComponent);
    component = fixture.componentInstance;

    component.task = {
      id: 'TestID',
      name: 'Test Task',
      status: 'todo',
      created: '2025-05-04T15:00:00Z',
      description: 'Test description',
    } as Task;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task details correctly', () => {
    const nameElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(nameElement.textContent).toBe(component.task.name);

    const descriptionElement = fixture.debugElement.query(
      By.css('.text-gray-200')
    ).nativeElement;
    expect(descriptionElement.textContent).toBe(component.task.description);

    const dateElement = fixture.debugElement.query(
      By.css('.text-gray-400')
    ).nativeElement;
    expect(dateElement.textContent).toContain(
      new DatePipe('en-US').transform(
        component.task.created,
        'dd/MM/yyyy HH:mm'
      )
    );
  });

  it('should open delete modal when trash icon button is clicked', () => {
    const deleteButton = fixture.debugElement.query(
      By.css('app-button button')
    );

    deleteButton.nativeElement.click();
    fixture.detectChanges();

    expect(modalServiceSpy.showDeleteModal).toHaveBeenCalledWith(
      component.task
    );
  });
});
