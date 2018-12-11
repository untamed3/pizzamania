import {Component, Input, OnInit} from '@angular/core';
import {PizzaModel} from "../../models/pizza.model";

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() private pizza:PizzaModel;
  constructor() { }

  ngOnInit() {
  }
}
