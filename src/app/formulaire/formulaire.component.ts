import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../models/pizza.model";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  pizza = new PizzaModel();

  constructor(private pizzaService:PizzaService) {
  }

  ngOnInit() {}

  handleClickCommander(){
    this.pizzaService.setPizzaCommande(this.pizza);
  }

  validateForm(){
    let pizza = this.pizza;
    return !pizza.base || !pizza.pate || !(pizza.anchois || pizza.magret || pizza.miel || pizza.jambon);
  }

}
