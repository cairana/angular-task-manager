import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWrapperComponent } from './grid-wrapper.component';
import { FilterTasksPipe } from '../../pipes/filter-tasks.pipe';

describe('GridWrapperComponent', () => {
  let component: GridWrapperComponent;
  let fixture: ComponentFixture<GridWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
