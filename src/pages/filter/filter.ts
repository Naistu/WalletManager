import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  myForm: FormGroup;

  filter = {
    rango: String,
    date: String,
    tipo: String,
    categoria: String
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,  public formBuilder: FormBuilder, public storage: Storage) {

    this.myForm = this.formBuilder.group({
      rango: [''],
      date: [''],
      tipo: [''],
      categoria: ['']
    });
  }

  saveFiltros(){
    this.filter.rango =
    this.myForm.get('rango').value;
    this.filter.date = this.myForm.get('date').value;
    this.filter.tipo = this.myForm.get('tipo').value;
    this.filter.categoria = this.myForm.get('categoria').value;
    console.log(this.filter);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
