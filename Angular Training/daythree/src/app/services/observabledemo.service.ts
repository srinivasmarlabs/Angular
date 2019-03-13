import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservabledemoService {

  data: Observable<any>;

  constructor() { }

  getData(): Observable<any> {
    this.data = new Observable<any>(
      observer => {
        setTimeout(() => {
          observer.next(11);
        }, 5000);

        setTimeout(() => {
          observer.next(22);
        }, 10000);

        setTimeout(() => {
          observer.next(33);
        }, 15000);

        setTimeout(() => {
          observer.next({
            country: 'India',
            capital: 'New Delhi'
          });
        }, 20000);
      }
    );
    return this.data;
  }
}
