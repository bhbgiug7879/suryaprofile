import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
modalActive = false;
  selectedTestimonial: any = null;

  testimonials = [
    {
      name: 'Daniel lewis',
      avatar: './assets/images/avatar-1.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Jessica miller',
      avatar: './assets/images/avatar-2.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Emily evans',
      avatar: './assets/images/avatar-3.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Henry william',
      avatar: './assets/images/avatar-4.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ];

  clients = [
    { logo: './assets/images/logo-1-color.png' },
    { logo: './assets/images/logo-2-color.png' },
    { logo: './assets/images/logo-3-color.png' },
    { logo: './assets/images/logo-4-color.png' },
    { logo: './assets/images/logo-5-color.png' },
    { logo: './assets/images/logo-6-color.png' }
  ];

  openModal(testimonial: any) {
    this.selectedTestimonial = testimonial;
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }
}
