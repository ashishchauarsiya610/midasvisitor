import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLabelActive: Boolean = false;
  constructor () { }

  toggleIcon(evt) {
    this.isLabelActive = !this.isLabelActive;
  }

}
