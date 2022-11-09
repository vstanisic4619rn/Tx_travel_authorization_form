import {
  Component,
  inject,
  Injectable,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  filter,
  interval,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  Subject,
  Subscription, takeUntil, takeWhile,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class UserTrackingService {
  isUserPageVisited$ = new ReplaySubject<boolean>(5);
}

@Component({
  selector: 'app-home',
  standalone: true,
  template: '<h1>Welcome to Users App!</h1>',
})
export class HomeComponent implements OnInit, OnDestroy {
  // intervalSubscription = new Subscription();
  private destroy$ = new Subject<void>();

  ngOnInit() {
    // this.activePageService.activePage$.next('Home');
    //
    // this.activePageService.activePage$.subscribe((activePage) => {
    //   this.activePage = activePage;
    // });

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

    const int$ = interval(1000).pipe(
      map((count) => count + 1),
      tap((count) => console.log('count from tap', count)),
      filter((count) => count % 2 === 0),
      tap((count) => console.log('count from tap 2', count)),
      takeUntil(this.destroy$)
    );
    // const int2$ = int$;

    int$.subscribe((count) => {
      console.log('count from subscribe', count);
    });

    int$.subscribe(() => {});
    int$.subscribe(() => {});
    // const numbersSubject = new BehaviorSubject<number>(0);
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
    //
    // numbersSubject.next(3);
  }

  ngOnDestroy() {
    // this.intervalSubscription.unsubscribe();
    // this.destroy$.next();
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
