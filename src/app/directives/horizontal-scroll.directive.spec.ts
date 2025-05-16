import { ElementRef } from '@angular/core';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';

describe('HorizontalScrollDirective', () => {
  it('should create an instance', () => {
    const mockElement = document.createElement('div');
    const elRef = new ElementRef<HTMLElement>(mockElement);
    const directive = new HorizontalScrollDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
