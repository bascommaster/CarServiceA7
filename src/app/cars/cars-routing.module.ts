import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const carRoutes: Routes = [
  {
    path: 'cars/:id',
    // component: CarsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(carRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
