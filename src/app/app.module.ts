import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AbonentsComponent } from './components/abonents/abonents.component';
import { TableComponent } from './components/abonents/table/table.component';
import { BlockComponent } from './components/abonents/block/block.component';
import { MainComponent } from './components/abonents/main/main.component';
import { AbonentComponent } from './components/abonents/abonent/abonent.component';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    AbonentsComponent,
    HomeComponent,
    TableComponent,
    BlockComponent,
    MainComponent,
    AbonentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
