import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { JobsModule } from './jobs/jobs.module';
import { LayoutModule } from './layout/layout.module';
import { JobSeekerModule } from './job-seeker/job-seeker.module';
import { EntrepriseModule } from './entreprise/entreprise.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JobsModule,
    LayoutModule,
    JobSeekerModule,
    EntrepriseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[NavComponent]
})
export class AppModule { }
