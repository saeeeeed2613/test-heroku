import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-up',
  templateUrl: './move-up.component.html',
  styleUrls: ['./move-up.component.css']
})
export class MoveUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ScrollToTop() {

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 4);
}

}
