import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../model/entreprise.model';
import { Sector } from '../model/sector';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

url = 'http://localhost:3000/entreprise';

  constructor(private http: HttpClient) { }

  getEntreprise() : Observable<Entreprise>{
    return this.http.get<Entreprise>(this.url);
  }

  addEntreprise(entreprise : Entreprise) : Observable<Entreprise>{
    return this.http.post<Entreprise>(this.url, entreprise);
  }

  updateEntreprise(entreprise, entrepriseId) : Observable<Entreprise>{
    const entrepriseUrl = this.url + '/' + entrepriseId;
    return this.http.put<Entreprise>(entrepriseUrl , entreprise);
  }

  viewEntreprise(entrepriseId) : Observable<Entreprise>{
    const entrepriseUrl = this.url + '/' + entrepriseId;
    return this.http.get<Entreprise>(entrepriseUrl);
  }

  deleteEntreprise(entrepriseId) : Observable<Entreprise>{
    const entrepriseUrl = this.url + '/' + entrepriseId;
    return this.http.delete<Entreprise>(entrepriseUrl);
  }

  searchBySector(sectorId) : Observable<Entreprise>{
    const entrepriseUrl = this.url + '?secteurId=' + sectorId;
    return this.http.get<Entreprise>(entrepriseUrl);
  }

  getSectors(): Observable<Sector>{
    const sectorUrl = 'http://localhost:3000/sector';
    return this.http.get<Sector>(sectorUrl);
  }

}
