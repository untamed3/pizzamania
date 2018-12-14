import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../../services/pizza.service";
import {PizzaModel} from "../../models/pizza.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private pizzaService:PizzaService, private loggerService:LoggerService, private router:Router) {}

  private pizza:PizzaModel = this.pizzaService.getPizzaCommande();
  private isLoading: boolean;
  private message:String = null;

  ngOnInit() {
    this.isLoading = true;
    if(this.pizza === null){
      this.router.navigate(['']);
    }
    else {
      this.pizzaService.commanderPizza().subscribe(
        (res) => { this.onSuccess(res)},
        (error) => { this.onError(error)});
    }
  }

  public onSuccess(res:any){
    window.localStorage.setItem('lastPizza', JSON.stringify(this.pizza));
    this.isLoading = false;
    this.message = "Merci pour votre commande. (commande n° " + res.id + ")";
    this.loggerService.logger("commande passee","info");
  }
  public onError(err:HttpErrorResponse){
    this.isLoading = false;
    this.message = "Une erreur s'est produite, sry.";
    this.loggerService.logger("Erreur commande","error");
  }


}
