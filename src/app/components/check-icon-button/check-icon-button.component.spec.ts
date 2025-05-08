import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIconButtonComponent } from './check-icon-button.component';

describe('IconButtonComponent', () => {
  let component: CheckIconButtonComponent;
  let fixture: ComponentFixture<CheckIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckIconButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
