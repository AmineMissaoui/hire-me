import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AddEntrepriseComponent
} from './add-entreprise/add-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import {
  EntrepriseComponent
} from './entreprise/entreprise.component';
import {
  HomeComponent
} from './home/home.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import {
  LoginComponent
} from './login/login.component';
import {
  NotFoundComponent
} from './not-found/not-found.component';
import { SearchEntrepriseBySectorComponent } from './search-entreprise-by-sector/search-entreprise-by-sector.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'entreprise',
    component: EntrepriseComponent
  },
  {
    path: 'list-entreprise',
    component: ListEntrepriseComponent
  },
  {
    path: 'entreprise/:id',
    component: DetailEntrepriseComponent
  },
  {
    path: 'update-entreprise/:id',
    component: UpdateEntrepriseComponent
  },
  {
    path: 'delete-entreprise/:id',
    component: DeleteEntrepriseComponent
  },
  {
    path: 'sector/:id',
    component: SearchEntrepriseBySectorComponent
  },
  {
    path: 'add-entreprise',
    component: AddEntrepriseComponent
  },{
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
