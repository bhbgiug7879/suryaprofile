import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
 services = [
  {
    icon: './assets/icons/html.png',
    title: 'HTML',
    description: 'Building well-structured and semantic web pages using modern HTML standards.'
  },
  {
    icon: './assets/icons/css.png',
    title: 'CSS & BOOTSTRAP',
    description: 'Creating responsive, visually appealing designs with modern CSS techniques and frameworks.'
  },
  {
    icon: './assets/icons/java.png',
    title: 'JAVASCRIPT',
    description: 'Developing dynamic and interactive web applications using modern JavaScript features.'
  },
  {
    icon: './assets/icons/angular.png',
    title: 'ANGULAR',
    description: 'Building powerful single-page applications (SPAs) with Angular for fast, scalable web experiences.'
  }
];

}
