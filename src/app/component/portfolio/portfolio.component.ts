import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
isSelectOpen = false;
  selectedFilter = 'All';
  filters = ['All', 'Web design', 'Applications', 'Web development'];

  projects = [
    { title: 'Cloud-Based', category: 'Web development', image: './assets/images/mahanya.svg' },
    { title: 'News-Site', category: 'Web development', image: './assets/images/setAlerts.svg' },
    { title: 'TTDC', category: 'Web design', image: './assets/images/ttdc.png' },
    { title: 'E-commerce', category: 'Applications', image: './assets/images/aureola.png' },
    { title: 'Online-Insurance', category: 'Web design', image: './assets/images/gmat-one.svg' },
    { title: 'Cloud-Based', category: 'Web design', image: './assets/images/our-work-numentica.svg' }
  ];

  filteredProjects = [...this.projects];

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    this.isSelectOpen = false;

    if (filter === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === filter);
    }
  }
}
