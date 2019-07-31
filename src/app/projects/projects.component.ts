import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  over = false;
  itemindex;
  projects = [
    {href: 'https://ucsr.kiev.ua/',  src: 'url("./assets/img/ucsr.png")', technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']},
    {href: 'https://annaverner.github.io/weather/',  src: 'url("./assets/img/weather.png")', technologies: ['HTML', 'CSS', 'Sass', 'Angular']},
    {href: 'https://idss.org.ua/holodomor',  src: 'url("./assets/img/holodomor.jpg")', technologies: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery']}
  ];
  showTechnologies(i) {
    this.over = !this.over;
    this.itemindex = i;
  }
}
