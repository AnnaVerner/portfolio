import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts = new ContactsComponent();
}
