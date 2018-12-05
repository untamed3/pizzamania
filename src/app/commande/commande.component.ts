import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {PizzaModel} from "../models/pizza.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private pizzaService:PizzaService) {}
  private pizza:PizzaModel = this.pizzaService.getPizzaCommande();
  private isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.pizzaService.commanderPizza().subscribe(
      (res) => { this.onSuccess(res)},
      (error) => { this.onError(error) });
  }



  public onSuccess(res:any){
    this.isLoading = false;
    console.log(res);
  }
  public onError(err:HttpErrorResponse){
    this.isLoading = false;
    console.log(err);
  }


}
