import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  
url = 'http://localhost:3000/entreprise';

  constructor(private http: HttpClient) { }

  getEntreprise(){
    return this.http.get<Entreprise>(this.url);
  }

  addEntreprise(entreprise : Entreprise){
    return this.http.post<Entreprise>(this.url, entreprise);
  }

}
