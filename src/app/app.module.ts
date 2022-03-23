import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

@NgModule({
  declarations: [AppComponent, NopageFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
