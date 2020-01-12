import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  constructor() { }

  ngOnInit() {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(e => console.log(e));
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
