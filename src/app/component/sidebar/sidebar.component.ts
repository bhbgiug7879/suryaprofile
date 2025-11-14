import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
isActive = false;
contacts: any[] = [];
socialLinks = [
    { icon: 'logo-facebook', url: '#' },
    { icon: 'logo-twitter', url: '#' },
    { icon: 'logo-instagram', url: '#' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.contacts = [
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
        link: this.sanitizer.bypassSecurityTrustUrl('https://wa.me/917010199142')
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
  }

  ngOnInit() {
      AOS.init({
        duration: 1000,
        once: true,
      });
      AOS.refresh();
    }

  toggleSidebar() {
    this.isActive = !this.isActive;
  }
}
