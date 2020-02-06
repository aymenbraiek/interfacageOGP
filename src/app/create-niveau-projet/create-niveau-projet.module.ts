import { NgModule } from '@angular/core';
import { CreateNiveauProjetComponent } from './create-niveau-projet.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../model/material.module';

@NgModule({
    declarations: [
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
    providers: [],
    bootstrap: []
  })
  export class CreateNiveauProjetModule { }
