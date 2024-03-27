import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { CommunicationComponent } from './communication/communication.component';
import { FutureComponent } from './future/future.component';

export const routes: Routes = [
  // { path: '', component: IntroComponent },
  { path: '', component: FutureComponent },
  { path: 'intro', component: IntroComponent},
  { path: 'milestones', component: MilestonesComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'future', component: FutureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
