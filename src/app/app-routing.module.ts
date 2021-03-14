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
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import {
  EntrepriseComponent
} from './entreprise/entreprise.component';
import {
  HomeComponent
} from './home/home.component';
import {
  LoginComponent
} from './login/login.component';
import {
  NotFoundComponent
} from './not-found/not-found.component';

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
    path: 'entreprise/:id',
    component: DetailEntrepriseComponent
  },
  {
    path: 'add-entreprise',
    component: AddEntrepriseComponent
  }, {
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
