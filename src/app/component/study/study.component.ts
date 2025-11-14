import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {
// counterValue: number = 0;
// public subscription!: Subscription;

//   ngOnInit(): void {
//     debugger
//     console.log('Component Initialized (ngOnInit)');

//     const counterObservable: Observable<number> = interval(1000).pipe(
//       map(val => val + 1)
//     );

//     this.subscription = counterObservable.subscribe(
//       (value: number) => {
//         debugger
//         this.counterValue = value;
//       }
//     );
//   }

//   ngOnDestroy(): void {
//     debugger
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//       console.log('Component Destroyed (ngOnDestroy) - Subscription Unsubscribed!');
//     }
//   }
}

