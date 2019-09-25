import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core-module/core-module.module';
import { RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    CarsModule,
    CoreModule,
    RouterModule.forRoot([
      {path: 'cars', component: CarsListComponent}
    ])
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
