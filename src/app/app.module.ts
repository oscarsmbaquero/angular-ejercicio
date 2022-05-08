import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotListComponent } from './pages/pilot-list/pilot-list.component';
import { PilotComponent } from './pages/pilot-list/components/pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotListComponent,
    PilotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
