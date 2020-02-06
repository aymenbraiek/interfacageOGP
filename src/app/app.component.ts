import { Component, OnInit } from '@angular/core';
import { Niveauprojet } from './model/Niveauprojet';
import { NiveauProjetService } from './services/niveauProjet.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


constructor() {
  }
  ngOnInit(): void {

    }
}
