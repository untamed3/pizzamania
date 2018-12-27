import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../../services/pizza.service";
import {Router} from "@angular/router";
import {PizzaModel} from "../../models/pizza.model";

@Component({
  selector: 'app-pizza-precedente',
  templateUrl: './pizza-precedente.component.html',
  styleUrls: ['./pizza-precedente.component.css']
})
export class PizzaPrecedenteComponent implements OnInit {


  lastPizza:PizzaModel = null;

  constructor(private pizzaService:PizzaService, private router:Router) { }

  ngOnInit() {
    let pizza = JSON.parse(window.localStorage.getItem("lastPizza"));
    this.lastPizza = Object.assign(new PizzaModel(), pizza);
    if(this.lastPizza === null){
      this.router.navigate(['formulaire']); //Si l'utilisateur n'a jamais commandé de pizza
    }
  }

  handleClickCommander(){
    this.pizzaService.setPizzaCommande(this.lastPizza);
  }
  handleClickModifier(){
    this.pizzaService.setPizzaPrecedente(this.lastPizza);
  }

}
