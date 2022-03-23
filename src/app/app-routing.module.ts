import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '**',
    component: NopageFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthenticationRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
