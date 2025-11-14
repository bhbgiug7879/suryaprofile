import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
isModalOpen = false;
  selectedTestimonial: any = null;

  testimonials = [
{
  project_name: 'Numentica',
  avatar: './assets/images/avatar-1.png',
  text: 'Our website performance improved dramatically after the frontend revamp. The code was clean, responsive, and SEO-friendly. Communication was smooth throughout the project, and every change was delivered on time.'
},
{
  project_name: 'TTDC',
  avatar: './assets/images/avatar-2.png',
  text: 'The new web portal looks modern and loads faster across all devices. The frontend development work was precise and exceeded our expectations. We truly appreciate the attention to detail and quick turnaround.'
},
{
  project_name: 'Mahaaya',
  avatar: './assets/images/avatar-3.png',
  text: 'They built a beautiful and responsive interface for our platform. The user experience has improved significantly, and our clients love the new layout. Great technical expertise and consistent delivery quality.'
},
{
  project_name: 'SetAlerts',
  avatar: './assets/images/avatar-4.png',
  text: 'The frontend system was developed exactly as per our requirements. It’s fast, responsive, and easy to manage. The collaboration was smooth, and every feature worked flawlessly after deployment.'
}


  ];

  openModal(testimonial: any) {
    this.selectedTestimonial = testimonial;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
