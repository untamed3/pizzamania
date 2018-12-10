import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private title = 'Pizza Mania !';
  private lastPizza = JSON.parse(window.localStorage.getItem("lastPizza"));

  constructor() {}

  ngOnInit() {
  }
}
