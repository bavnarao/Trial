import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {LoginViewComponent} from "./login/login-view-component";
import {DashboardComponent} from "./dashboard/dashboard.component";

//import { DataTablesModule } from 'datatables.net-dt';
import { DataTableModule } from 'angular2-datatable';


import {FormsModule} from "@angular/forms";

import { routing }        from './app.routes';
import { HttpModule }     from '@angular/http';
import {MaterialService} from "./dashboard/material.service";
import {SearchPipe} from "./dashboard/search.pipe";
import {OrderPipe} from "./dashboard/order.pipe";

@NgModule({
  imports:      [ BrowserModule, DataTableModule, FormsModule, routing, HttpModule ],
  declarations: [ AppComponent, LoginViewComponent, DashboardComponent, SearchPipe, OrderPipe ],
  providers: [MaterialService],
  bootstrap:    [ DashboardComponent ]
})
export class AppModule { }
