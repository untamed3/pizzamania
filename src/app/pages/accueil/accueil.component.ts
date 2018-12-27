import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../services/logger.service";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'Pizza Mania !';

  constructor(private loggerService:LoggerService) {
    this.loggerService.logger("accueil", "info");
  }

  ngOnInit() {
  }
}
