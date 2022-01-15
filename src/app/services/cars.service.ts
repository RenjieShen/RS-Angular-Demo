import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, Subject, throwError } from "rxjs";
import { Car } from "../models/car.model";

@Injectable({ providedIn: 'root'})
export class CarsService {
  private cars: Car[] = [];
  private carsUpdated = new Subject<Car[]>();

  constructor(private httpClient: HttpClient) {}

  initialiseCars() {
    return this.httpClient.get<Car[]>(environment.apiUrl + '/cars')
      .pipe(
        retry(3),
        catchError(this.handleError))
      .subscribe((cars) => {
        this.cars = cars;
        this.carsUpdated.next([...this.cars]);
      });
  }

  subscribeToCarsUpdated() {
    return this.carsUpdated.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    console.error(`An error occurred (Code ${error.status}): `, error.error);
    return throwError(() => error);
  }
}