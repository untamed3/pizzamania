import { Injectable } from '@angular/core';
import {Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PizzaModel} from "../models/pizza.model";
import {RequestOptions} from "@angular/http";

@Injectable()
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  private urlPizzas = 'http://localhost:4300/pizzas';
  private urlCommander = 'http://localhost:4300/commanderPizza';

  private pizzaCommande:PizzaModel = null;
  private pizzaPrecedente:PizzaModel = null;

  public getPizzas(): Observable<PizzaModel[]>{
    return this.httpClient.get<PizzaModel[]>(this.urlPizzas);
  }

  public getPizzaCommande(){
    return this.pizzaCommande;
  }
  public setPizzaCommande(pizza:PizzaModel){
    this.pizzaCommande = pizza;
  }
  public getPizzaPrecedente(){
    return this.pizzaPrecedente;
  }
  public setPizzaPrecedente(pizza:PizzaModel){
    this.pizzaPrecedente = pizza;
  }

  public commanderPizza(){
    this.pizzaPrecedente = null; //pour le pas retrouver la pizza précédente dans le formulaire lors d'une autre commande.
    let pizza = this.pizzaCommande;
    let variables = (
      "?base=" + pizza.base
      + "&pate=" + pizza.pate
      + "&anchois=" + pizza.anchois
      + "&jambon=" + pizza.jambon
      + "&miel=" + pizza.miel
      + "&magret=" + pizza.magret
    );
    return this.httpClient.post(this.urlCommander + variables, null);
  }

}
