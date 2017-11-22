import { Component } from '@angular/core';
import { TransPage } from '../trans/trans';
import { HomePage } from '../home/home';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = TransPage;

  constructor(public navCtrl: NavController) {

  }

  reloadPage() {
    // location.reload();
  this.navCtrl.setRoot(this.navCtrl.getActive().component);

  } 
}
