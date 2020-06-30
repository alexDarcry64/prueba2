import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  abrirHome() {
    this.navCtrl.navigateForward("home");
  }

  ngOnInit() {
  }

}
