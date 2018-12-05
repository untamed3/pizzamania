import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {RouterModule, Routes} from "@angular/router";
import { CommandeComponent } from './commande/commande.component';
import { AccueilComponent } from './accueil/accueil.component';
import {PizzaService} from "./services/pizza.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'commande', component: CommandeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CommandeComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    PizzaService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
