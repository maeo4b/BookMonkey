import { Subject } from 'rxjs';

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
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
