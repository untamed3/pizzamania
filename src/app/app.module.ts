import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import {RouterModule, Routes} from "@angular/router";
import { CommandeComponent } from './pages/commande/commande.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import {PizzaService} from "./services/pizza.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PizzaPrecedenteComponent } from './pages/pizza-precedente/pizza-precedente.component';
import { CarteComponent } from './pages/carte/carte.component';
import { LoadingComponent } from './utils/loading/loading.component';
import { PizzaDetailsComponent } from './utils/pizza-details/pizza-details.component';
import {LoggerService} from "./services/logger.service";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'pizzaPrecedente', component: PizzaPrecedenteComponent},
  {path: 'carte', component: CarteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CommandeComponent,
    AccueilComponent,
    PizzaPrecedenteComponent,
    CarteComponent,
    LoadingComponent,
    PizzaDetailsComponent,
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
    LoggerService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
