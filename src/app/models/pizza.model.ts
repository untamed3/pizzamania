export class PizzaModel {
  private miel: boolean;
  private achois: boolean;
  private jambon: boolean;
  private magret: boolean;
  private pate: string;
  private base: string;
  private prix: number;
  private commander: boolean;
  private auteur: string;
  constructor() {
    this.auteur = 'Joris le con';
    this.achois = false;
    this.miel = false;
    this.jambon = false;
    this.magret = false;
    this.pate = null;
    this.base = null;
    this.prix = 0;
    this.commander = false;
  }
}
