import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseComponent } from './entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { FormsModule } from '@angular/forms';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { SearchEntrepriseBySectorComponent } from './search-entreprise-by-sector/search-entreprise-by-sector.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EntrepriseComponent, ListEntrepriseComponent, DetailEntrepriseComponent, DeleteEntrepriseComponent, AddEntrepriseComponent, UpdateEntrepriseComponent, SearchEntrepriseBySectorComponent],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    FormsModule,
    LayoutModule,
    RouterModule
  ]
})
export class EntrepriseModule { }
