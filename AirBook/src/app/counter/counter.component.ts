import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}
