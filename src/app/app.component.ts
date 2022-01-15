import { Car } from './models/car.model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CarsService } from './services/cars.service';
import { Subscription } from 'rxjs';
import { ITableHeader } from './components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('carsTable', {static: true}) carsTable: ElementRef;

  carsTableHeaders: ITableHeader[] =
    Object.keys(new Car()).map(key => {
      return { key: key, label: key };
    });
  carsTableData: Car[] = [];
  subscriptions: Subscription[] = [];

  constructor(private carsService: CarsService) {}

  async ngOnInit() {
    this.carsService.initialiseCars();
    this.subscriptions.push(
      this.carsService.subscribeToCarsUpdated()
        .subscribe((cars: Car[]) => {
          this.carsTableData = cars;
        }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

