import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {RouterModule, Routes} from "@angular/router";
import { CommandeComponent } from './commande/commande.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'commande', component: CommandeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CommandeComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
