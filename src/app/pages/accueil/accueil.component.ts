import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../../models/pizza.model";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private title = 'Pizza Mania !';

  constructor() {}

  ngOnInit() {}
}
