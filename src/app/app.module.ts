import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections/sections.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { DoubtsComponent } from './sections/doubts/doubts.component';
import { TreatmentsComponent } from './sections/treatments/treatments.component';
import { DepositionsComponent } from './sections/depositions/depositions.component';
import { MediaComponent } from './sections/media/media.component';
import { TeamComponent } from './sections/team/team.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule }   from '@angular/forms';

import { AnimateScrollModule } from 'ng-animate-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    HomeComponent,
    AboutComponent,
    DoubtsComponent,
    TreatmentsComponent,
    DepositionsComponent,
    MediaComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AnimateScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
