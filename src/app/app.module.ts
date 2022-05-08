import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotListComponent } from './pages/pilot-list/pilot-list.component';
import { PilotComponent } from './pages/pilot-list/components/pilot/pilot.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FooterLinkComponent } from './pages/footer/components/footer-link/footer-link.component';
import { HeaderHrefComponent } from './pages/header/components/header-href/header-href.component';


@NgModule({
  declarations: [
    AppComponent,
    PilotListComponent,
    PilotComponent,
    HeaderComponent,
    FooterComponent,
    FooterLinkComponent,
    HeaderHrefComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
