import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NiveauProjetService } from '../services/niveauProjet.service';

@Component({
  selector: 'app-create-niveau-projet',
  templateUrl: './create-niveau-projet.component.html',
  styleUrls: ['./create-niveau-projet.component.css']
})
export class CreateNiveauProjetComponent implements OnInit {
fromgroup: FormGroup;
errorMessage = '';
  // tslint:disable-next-line:max-line-length
  constructor(private  http: HttpClient , public niveauprojetservice: NiveauProjetService, public formbuilder: FormBuilder  , public router: Router) { }

  ngOnInit() {
  this.formGroupprojet();
  }
   /* Handle form errors in Angular 8 */
   public errorHandling = (control: string, error: string) => {
    return this.fromgroup.controls[control].hasError(error);
  }
formGroupprojet() {
this.fromgroup = this.formbuilder.group({
  name: ['', [Validators.required]],
  abriavation: ['', [Validators.required]],
  actif: ['', [Validators.required]],
  releaseprevue: ['', [Validators.required]],
  metier: ['' , [Validators.required]]
}); }

submitForm() {
  this.errorMessage = '';
  const formData = new FormData();
  formData.append('name', this.fromgroup.get('name').value);
  formData.append('abriavation', this.fromgroup.get('abriavation').value);
  formData.append('actif', this.fromgroup.get('actif').value);
  formData.append('releaseprevue', this.fromgroup.get('releaseprevue').value);
  formData.append('metier', this.fromgroup.get('metier').value);
  this.niveauprojetservice.addnewProjet(formData).subscribe((res) => { console.log(res); },
    // tslint:disable-next-line:no-shadowed-variable
    (error) => {this.errorMessage = error.error.text ; console.log(error); }
    );
  }

}








