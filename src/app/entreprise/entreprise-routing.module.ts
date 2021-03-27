import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';

import { EntrepriseComponent } from './entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { SearchEntrepriseBySectorComponent } from './search-entreprise-by-sector/search-entreprise-by-sector.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';

const routes: Routes = [
  { path: '', component: EntrepriseComponent },
  { path: 'list-entreprise', component: ListEntrepriseComponent },
  { path: 'detail-entreprise/:id', component: DetailEntrepriseComponent },
  { path: 'delete-entreprise/:id', component: DeleteEntrepriseComponent },
  { path: 'add-entreprise', component: AddEntrepriseComponent },
  { path: 'update-entreprise/:id', component: UpdateEntrepriseComponent },
  { path: 'sector/:id', component: SearchEntrepriseBySectorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
