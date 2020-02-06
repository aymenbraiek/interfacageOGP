import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './model/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListNiveauProjetComponent } from './list-niveau-projet/list-niveau-projet.component';
import { Routes } from '@angular/router';
import { CreateNiveauProjetComponent } from './create-niveau-projet/create-niveau-projet.component';
import { NiveauProjetService } from './services/niveauProjet.service';


@NgModule({
  declarations: [
    AppComponent,
    ListNiveauProjetComponent,
    CreateNiveauProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     AngularMaterialModule
],
  providers: [NiveauProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
