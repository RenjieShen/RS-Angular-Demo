import { Injector, ElementRef } from '@angular/core';

export abstract class ComponentBase {
  elementRef: ElementRef;

  constructor(injector: Injector) {
    this.elementRef = injector.get(ElementRef);
  }
}
