import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-application';

  no: number;

  constructor() {
    this.no = 0;
  }

  increase() {
    this.no++;
  }

  decrease() {
    this.no--;
  }

}
