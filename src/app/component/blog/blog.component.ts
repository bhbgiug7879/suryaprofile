import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
blogPosts = [
    {
      title: 'Design conferences in 2022',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: './assets/images/blog-1.jpg'
    },
    {
      title: 'Best fonts every designer',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      image: './assets/images/blog-2.jpg'
    },
    {
      title: 'Design digest #80',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
      image: './assets/images/blog-3.jpg'
    },
    {
      title: 'UI interactions of the week',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
      image: './assets/images/blog-4.jpg'
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './assets/images/blog-5.jpg'
    },
    {
      title: 'Design digest #79',
      category: 'Design',
      date: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      excerpt: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
      image: './assets/images/blog-6.jpg'
    }
  ];
}
