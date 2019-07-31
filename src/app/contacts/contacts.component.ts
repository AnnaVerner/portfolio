import { Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  email = 'annverner7@gmail.com';
  contacts = [
    {src: '../../assets/img/mail.svg', data: 'annverner7@gmail.com', type: 'mail'},
    {src: '../../assets/img/github.svg', data: 'https://github.com/AnnaVerner', name: 'AnnaVerner', type: 'web'},
    {src: '../../assets/img/telegram.svg', data: '@myTelegram_Anna', type: 'social'},
    {src: '../../assets/img/skype.svg', data: 'werner_production', type: 'social'}
  ];
}
