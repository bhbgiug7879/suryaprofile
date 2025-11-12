import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
isActive = false;

  contacts = [
    {
      icon: './assets/icons/mail.png',
      title: 'Email',
      value: 'nadhansurya0620@gmail.com',
      link: 'mailto:nadhansurya0620@gmail.com'
    },
    {
      icon: './assets/icons/phone-call.png',
      title: 'Phone',
      value: '+91 7010199142',
      link: 'tel:+917010199142'
    },
    {
      icon: './assets/icons/calendar.png',
      title: 'Birthday',
      value: 'June 20, 2000',
      datetime: '2000-06-20',
      type: 'time'
    },
    {
      icon: './assets/icons/location.png',
      title: 'Location',
      value: 'Chennai, Iyyappanthangal, INDIA',
      type: 'address'
    }
  ];

  socialLinks = [
    { icon: 'logo-facebook', url: '#' },
    { icon: 'logo-twitter', url: '#' },
    { icon: 'logo-instagram', url: '#' }
  ];

  toggleSidebar() {
    this.isActive = !this.isActive;
  }
}
