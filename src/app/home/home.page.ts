import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  abrirPrimeraPag() {
    this.navCtrl.navigateForward("pagina1");
  }

  abrirSegundaPag() {
    this.navCtrl.navigateForward("pagina2");
  }

  abrirTerceraPag() {
    this.navCtrl.navigateForward("pagina3");
  }
}
