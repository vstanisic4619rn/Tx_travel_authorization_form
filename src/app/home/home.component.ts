import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  template: '<h1>Welcome to Users App!</h1>',
})
export class HomeComponent implements OnInit, OnDestroy {
  // intervalSubscription: Subscription | undefined;

  ngOnInit() {
    // this.intervalSubscription = myInterval(1).subscribe({
    //   next: (xyz) => {
    //     console.log('=== fromSubscribe ===', xyz);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('=== observable is completed ===')
    //   },
    // });
    // this.intervalSubscription = interval(1000)
    //   .pipe(
    //     map((count) => count + 1),
    //     filter((count) => count % 2 === 0)
    //   )
    //   .subscribe((count) => {
    //     console.log(count);
    //   });
    // const numbersSubject = new BehaviorSubject<number>(1);
    //
    // numbersSubject.subscribe((number) => {
    //   console.log('o1', number);
    // });
    //
    // numbersSubject.next(2);
    //
    // numbersSubject.subscribe((number) => {
    //   console.log('o2', number);
    // });
  }

  ngOnDestroy() {
    // this.intervalSubscription?.unsubscribe();
    // console.log('destroy');
  }
}

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
