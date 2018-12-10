import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormulaireComponent } from './views/formulaire/formulaire.component';
import {RouterModule, Routes} from "@angular/router";
import { CommandeComponent } from './views/commande/commande.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import {PizzaService} from "./services/pizza.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PizzaPrecedenteComponent } from './views/pizza-precedente/pizza-precedente.component';
import { CarteComponent } from './views/carte/carte.component';
import { LoadingComponent } from './utils/loading/loading.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

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
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
