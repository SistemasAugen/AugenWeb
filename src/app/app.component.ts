import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'augen-web';
  constructor() {
      //document.addEventListener('contextmenu', event => event.preventDefault());
  }
}
