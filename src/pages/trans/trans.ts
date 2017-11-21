import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';



/**
 * Generated class for the TransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trans',
  templateUrl: 'trans.html',
})
export class TransPage {
  arrayTodos = [];
  //objeto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private modal: ModalController, public storage: Storage, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    // storage.clear()
    this.getData()
    console.log(this.arrayTodos); 
//    this.objeto = navParams.data;
//    this.objeto  = navParams.get('id');
  }


  openModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('ModalPage', myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("volvemos a trans");
      console.log(data);
      // recargame la pagina
      this.navCtrl.setRoot(TransPage); 
      this.navCtrl.popToRoot();
    }); 
  }

  openFilter() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('FilterPage', myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("mostrame con filtros");
      console.log(data);  
    });
  }
  
  async getData() {
    this.storage.keys().then((arrayDeKeys) => {
      console.log(arrayDeKeys); 
      for(let i of arrayDeKeys){
        this.storage.get(i).then((pepe) => {
          let obj = JSON.parse(pepe);
          this.arrayTodos.push(obj);
          console.log();
        });
      }
    });
  }

  deleteItem() {
    // let key = ""+this.objeto.id;
    // this.storage.remove(key);
//    this.navCtrl.setRoot(TransPage); 
//    this.navCtrl.popToRoot();  
    let alert = this.alertCtrl.create({
      title: 'Transaccion eliminada!',
      subTitle: 'Esta transaccion no estara mas dentro de tu Wallet Manager!',
      buttons: ['OK']
    });
    alert.present();
    this.viewCtrl.dismiss();
  }
}

