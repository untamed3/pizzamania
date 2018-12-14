export class PizzaModel {
  miel: boolean;
  anchois: boolean;
  jambon: boolean;
  magret: boolean;
  pate: string;
  base: string;
  image: string;
  prix: number;


  constructor() {
    this.anchois = false;
    this.miel = false;
    this.jambon = false;
    this.magret = false;
    this.pate = null;
    this.base = null;
    this.image = null;
    this.prix = null;
  }
  public getPrix():number {
    let prix = 8;
    if(this.miel) { prix+=2; }
    if(this.jambon) { prix+=2; }
    if(this.magret) { prix+=4; }
    if(this.anchois) { prix+=1; }
    return this.prix = prix;
  }

}
