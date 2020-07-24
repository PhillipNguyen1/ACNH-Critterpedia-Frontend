import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFishesComponent } from './view-fishes/view-fishes.component';
import { ViewBugsComponent } from './view-bugs/view-bugs.component';

const routes: Routes = [
  { path: 'fishes', component: ViewFishesComponent },
  { path: 'bugs', component: ViewBugsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
