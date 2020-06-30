import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  abrirHome() {
    this.navCtrl.navigateForward("home");
  }

  ngOnInit() {
  }

}
