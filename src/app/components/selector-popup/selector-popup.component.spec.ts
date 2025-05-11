import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPopupComponent } from './selector-popup.component';

describe('SelectorPopupComponent', () => {
  let component: SelectorPopupComponent;
  let fixture: ComponentFixture<SelectorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
