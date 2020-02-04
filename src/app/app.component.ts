import { Component, OnInit } from '@angular/core';
import { Niveauprojet } from './model/Niveauprojet';
import { NiveauProjetService } from './services/niveauProjet.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projetfrom: FormGroup;
  formData: any = new FormData();
  errorMessage = '';
  succesMessage = ' ';

constructor( private http: HttpClient, public fb: FormBuilder, public niveauprojetservice: NiveauProjetService, public router: Router) {
  }
  ngOnInit(): void {
    this.addProjet();
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.projetfrom.controls[control].hasError(error);
  }

addProjet() {
this.projetfrom = this.fb.group({
  name: ['', [Validators.required]],
  abriavation: ['', [Validators.required]],
  actif: ['', [Validators.required]],
  releaseprevue: ['', [Validators.required]],
  metier: ['' , [Validators.required]]
})}
submitForm() {
  this.formData.append('name', this.projetfrom.get('name').value);
  this.formData.append('abriavation', this.projetfrom.get('abriavation').value);
  this.formData.append('actif', this.projetfrom.get('actif').value);
  this.formData.append('releaseprevue', this.projetfrom.get('releaseprevue').value);
  this.formData.append('metier', this.projetfrom.get('metier').value);
  // tslint:disable-next-line:max-line-length
  this.niveauprojetservice.addnewProjet(this.formData).subscribe((response) => {  console.log(response); },
  (error) => { this.errorMessage = error.error.text; console.log('HTTP Error', error); });
  }
}
