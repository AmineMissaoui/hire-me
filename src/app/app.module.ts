import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { FormsModule } from '@angular/forms';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    EntrepriseComponent,
    DetailEntrepriseComponent,
    AddEntrepriseComponent,
    NotFoundComponent,
    HomeComponent,
    ListEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
