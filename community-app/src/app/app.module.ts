import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialLayoutComponent } from './material-layout/material-layout.component'
import { MaterialModule } from './material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ChecklistComponent } from './components/checklist/checklist.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MaterialLayoutComponent,
    TodoListComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
