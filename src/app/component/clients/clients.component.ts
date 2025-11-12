import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  activeIndex: number = 0;
  intervalId: any;
  clients = [
    {
      img: './assets/images/numentica-logo.svg',
      classname: 'numentica'
    },
    {
      img: './assets/images/ttdc-logo.svg',
      classname: 'ttdc'
    },
    {
      img: './assets/images/mahayaa-logo.svg',
      classname: 'mahayaa'
    },
    {
      img: './assets/images/setalertlogo.svg',
      classname: 'setalert'
    },
    {
      img: './assets/images/gmat-logo.svg',
      classname: 'gmat'
    },
    {
      img: './assets/images/logo-aureola.png',
      classname: 'aureola'
    }
  ];

  ngOnInit() {
    this.startAutoCycle();
  }

  startAutoCycle() {
    const totalClients = this.clients.length;
    const intervalDuration = 1500;

    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % totalClients;
    }, intervalDuration);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
