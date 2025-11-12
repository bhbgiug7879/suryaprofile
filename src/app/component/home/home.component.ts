import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activePage = 'about';

  onPageChange(page: string) {
    debugger
    this.activePage = page;
    window.scrollTo(0, 0);
  }
}
