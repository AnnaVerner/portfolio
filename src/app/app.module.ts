import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingComponent, routingComponents} from './routing.component';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    NgwWowModule,
    RoutingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
