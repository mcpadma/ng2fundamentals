import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from "./events/events-list/events-list.component";

const routes: Routes = [
  {
    path: '**', 
    redirectTo:'events',
    pathMatch:'full'
  },
  {
    path:'', 
    pathMatch:'full',
    redirectTo: 'events'
  },
  {
    path:'events', 
    component:EventsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
