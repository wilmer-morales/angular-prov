import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
  ],
})
export class PagesModule {}
