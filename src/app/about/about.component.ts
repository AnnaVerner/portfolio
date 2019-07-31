import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = [
    {skill: 'HTML', progress: '60%'},
    {skill: 'CSS', progress: '40%'},
    {skill: 'SASS', progress: '30%'},
    {skill: 'JS', progress: '35%'},
    {skill: 'jQuery', progress: '30%'},
    {skill: 'Angular', progress: '10%'}
  ];
  soft = [
    {name: 'Adobe Illustrator', src: '../../assets/img/ai.svg'},
    {name: 'Photoshop', src: '../../assets/img/ps.svg'}
  ];
  languages = [
    {language: 'English', progress: '50%'},
    {language: 'Ukrainian', progress: '100%'},
    {language: 'Russian', progress: '100%'}
  ];

}
