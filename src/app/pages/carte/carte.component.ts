import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../../models/pizza.model";
import {PizzaService} from "../../services/pizza.service";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  private pizzas: Observable<PizzaModel[]> = null;
  private isLoading:Boolean;
  private message:String;
  private prix:number = 15;

  constructor(private pizzaService:PizzaService) {}

  ngOnInit() {
    this.isLoading = true;
    this.pizzaService.getPizzas().subscribe(
      (res) => {this.onSuccess(res)},
      (error) => {this.onError(error)}
    );
  }

  public onSuccess(res:any){
    this.isLoading = false;
    this.pizzas = res;
  }
  public onError(err:HttpErrorResponse){
    this.isLoading = false;
    this.message = "Erreur de chargement";
  }

  public handleClickCommander(pizza:PizzaModel):void{
    this.pizzaService.setPizzaCommande(pizza);
  }

}
