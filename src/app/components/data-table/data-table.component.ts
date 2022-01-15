import { ObjectHelpers } from './../../helpers/ObjectHelpers';
import { Component, Injector, ViewEncapsulation, Input, OnChanges,  SimpleChanges, ViewChild } from '@angular/core';
import { ComponentBase } from '../component-base';
import { SearchBarComponent } from '../search-bar/search-barcomponent';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class DataTableComponent extends ComponentBase implements OnChanges {
  @ViewChild('searchBar', {static: true}) searchBar: SearchBarComponent;

  @Input() headers: ITableHeader[] = [];
  @Input() data: any[] = [];

  ObjectHelpers = ObjectHelpers;
  displayedData: any[] = [];
  sort: ITableSort = { column: '', descending: false };

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      if (changes.hasOwnProperty(propertyName)) {
        switch (propertyName) {
          case 'headers':
            if (this.sort.column === '' ||
              !changes['headers'].currentValue.includes(this.sort.column)) {
                this.setSort(this.headers[0]? this.headers[0].key : '');
            }
            break;
          case 'data':
            this.searchBar.data = changes['data'].currentValue;
            break;
        }
      }
    }
  }

  onFilterApplied(newDisplayedData: any[]) {
    this.displayedData = newDisplayedData;
    this.sortTableData();
  }

  setSort(key: string) {
    if (key === this.sort.column) {
      this.sort.descending = !this.sort.descending;
    } else {
      this.sort.column = key;
    }

    this.sortTableData();
  }

  sortTableData() {
    this.displayedData = this.displayedData.sort((a, b) => {
      const first = ObjectHelpers.getValue(a, this.sort.column);
      const second = ObjectHelpers.getValue(b, this.sort.column);

      let decendingControl = this.sort.descending ? -1 : 1;
      if (isNaN(+first) || isNaN(+second)) {
        return (first + '').localeCompare(second + '') * decendingControl;
      } else {
        return (first - second) * decendingControl;
      }
    });
  }
}

export interface ITableHeader {
  key: string;
  label: string;
}

interface ITableSort {
  column: string;
  descending: boolean;
}
