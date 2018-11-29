import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../models/pizza.model";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  pizza = new PizzaModel();

  constructor() {
  }

  ngOnInit() {
  }

  validateForm(){
    let pizza = this.pizza;
    return !pizza.base || !pizza.pate || !(pizza.achois || pizza.magret || pizza.miel || pizza.jambon);
  }

}
