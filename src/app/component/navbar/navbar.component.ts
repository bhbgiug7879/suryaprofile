import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
@Output() pageChange = new EventEmitter<string>();
  
  navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
  activePage = 'about';

  changePage(page: string) {
    debugger
    this.activePage = page;
    this.pageChange.emit(page);
  }
}
