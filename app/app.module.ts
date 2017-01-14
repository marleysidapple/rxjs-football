import { NgModule, Pipe, PipeTransform }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing";





import { AppComponent }  from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CompetitionService } from './services/competition.service';





@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent, CompetitionComponent, HeaderComponent, HomeComponent],
  providers: 	[CompetitionService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
