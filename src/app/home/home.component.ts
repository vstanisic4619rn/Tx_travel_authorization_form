import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  template: '<h1>Welcome to Users App!</h1>',
})
export class HomeComponent {}

function myInterval(seconds: number): Observable<number> {
  return new Observable<number>((observer) => {
    let count = 0;

    const interval = setInterval(() => {
      observer.next(count);
      count++;
    }, seconds * 1000);

    return () => clearInterval(interval);
  });
}
