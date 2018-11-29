export class PizzaModel {
  miel: boolean;
  achois: boolean;
  jambon: boolean;
  magret: boolean;
  pate: string;
  base: string;
  commander: boolean;


  constructor() {
    this.achois = false;
    this.miel = false;
    this.jambon = false;
    this.magret = false;
    this.pate = null;
    this.base = null;
    this.commander = false;
  }
  public prix():number {
    let prix = 8;
    if(this.miel) { prix+=2; }
    if(this.jambon) { prix+=2; }
    if(this.magret) { prix+=4; }
    if(this.achois) { prix+=1; }
    return prix;
  }

}
