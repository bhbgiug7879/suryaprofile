import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
 education = [
  {
    institution: 'SSLC',
    period: '2013 — 2015',
    description: 'Completed secondary education with good academic performance and strong fundamentals in core subjects.'
  },
  {
    institution: 'Higher Secondary (HSC)',
    period: '2015 — 2017',
    description: 'Successfully completed higher secondary education with focus on science and mathematics, achieving good overall results.'
  },
  {
    institution: 'Polytechnic College',
    period: '2017 — 2019',
    description: 'Studied diligently and successfully completed Diploma in Civil Engineering with good academic scores and practical knowledge.'
  }
];


  experience = [
{
  position: 'Web Developer',
  period: '2023 — 2025',
  description: 'Developed and maintained responsive, user-friendly websites using modern web technologies like HTML, CSS, JavaScript, and frameworks to deliver high-quality digital solutions.'
}

  ];

  skills = [
    { name: 'HTML', percentage: 89 },
    { name: 'CSS', percentage: 85 },
    { name: 'Bootstrap', percentage: 80 },
    { name: 'Javascript', percentage: 80 },
    { name: 'Typescript', percentage: 84 },
    { name: 'Angular', percentage: 90 }
  ];
}
