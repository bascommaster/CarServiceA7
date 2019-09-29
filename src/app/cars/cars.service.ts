import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, HttpModule } from '@angular/http';
import { Car } from './models/car';
import { map } from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseUrl = 'http://localhost:3000/cars';

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) {
    this.getAllCars();
   }

  getAllCars(): Observable<Car[]> {
    return this.http.get(this.baseUrl).pipe(map(res => res.json()));
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(this.baseUrl + '/' + id).pipe(map(res => res.json()));
  }

addCar(data: any): Observable<Car> {
  return this.http.post(this.baseUrl, data)
            .pipe(map(res => res.json()));
}

updateCar(id: number, data: any): Observable<Car> {
  return this.http.put(this.baseUrl + '/' + id, data).pipe(map(res => res.json()));
}

}
