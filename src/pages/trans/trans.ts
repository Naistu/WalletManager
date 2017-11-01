import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { Storage } from '@ionic/storage';



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
  arrayGanancia= [];
//  arrayGasto: Array<any>;
  arrayGasto= [];
	
  constructor(public navCtrl: NavController, public navParams: NavParams ,private modal: ModalController, public storage: Storage) {


    this.storage.keys().then((arrayDeKeys) => {
      console.log(arrayDeKeys); 
      for(let i of arrayDeKeys){
        this.storage.get(i).then((pepe) => {
			let obj = JSON.parse(pepe);
			if(obj.tipo == "1"){
              this.arrayGanancia.push(obj);
			} else {
              this.arrayGasto.push(obj);
            }
		});
      }
    });
    console.log(this.arrayGasto);
    console.log(this.arrayGanancia);
  }
//  this.storage.keys().then((asd) => {
//			for (let i of asd){
//				this.storage.get(i).then((val) => {
//					let jsval = JSON.parse(val);
//					if (jsval.tipo == this.item.title){
//						this.array.push(jsval);
//					}
//				})
//			}
//		})

// fitro por tipo, desp por categoria, for mes,dia,anio,etc
// menu filtro buscar algo piola
// abrir nueva page para mostrar las cards filtradas.   

  openModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('ModalPage', myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("Cerro modal");
      console.log(data);
    });
  }

  openFilter() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('FilterPage', myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("Cerro modal");
      console.log(data);
    });
  }
}

