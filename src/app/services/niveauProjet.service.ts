import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

export class NiveauProjetService{
    private urlcreateProjet = 'http://localhost:8080/biat';
    constructor(private http: HttpClient) { }


b

C
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    // tslint:disable-next-line:semicolon
    })}
    addnewProjet(data: any ): Observable<any> {

        return this.http.post<any>(this.urlcreateProjet + '/addNiveauProjet' , data);


      }

}
