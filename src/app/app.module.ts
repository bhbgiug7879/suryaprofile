import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ClientsComponent } from './component/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent,
    BlogComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ServicesComponent,
    TestimonialsComponent,
    ClientsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutusComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent,
    BlogComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
