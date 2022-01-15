import { Component, Injector, ViewEncapsulation, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ComponentBase } from '../component-base';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class SearchBarComponent extends ComponentBase implements OnChanges {
  @Input() data: any[] = [];
  @Output() filterApplied: EventEmitter<any[]> = new EventEmitter();

  term: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      if (changes.hasOwnProperty(propertyName)) {
        switch (propertyName) {
          case 'data':
            this.applyFilter();
            break;
        }
      }
    }
  }

  applyFilter() {
    this.filterApplied.emit(
      this.data.filter(d => {
        return Object.values(d)
          .find(i => JSON.stringify(i).toLowerCase()
              .includes(this.term.toLowerCase()));
      })
    );
  }
}
