import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-modal',
	templateUrl: 'modal.html',
})
export class ModalPage {
	myForm: FormGroup;
	// revisar como crear un objeto
	objeto = {
		cant: String,
		causa: String,
		dateHappend: String,
		tipo: String,
		categoria: String
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public toastCtrl: ToastController, public formBuilder: FormBuilder, public storage: Storage) {

		this.myForm = this.formBuilder.group({
			cant: ['', Validators.required],
			causa: [''],
			dateHappend: ['', Validators.required],
			tipo: ['', Validators.required],
			categoria: ['', Validators.required]
		});

		//Para guardar en el storage
		//		let asd = JSON.stringify(this.objeto);
		//		this.storage.set('1', asd);


		//Para sacar del storage
		//		this.storage.get('1').then((asd) => {
		//			let obj = JSON.parse(asd);
		//			console.log(obj);
		//		})


	}

	saveData(){	

		this.objeto.cant = this.myForm.get('cant').value;
		this.objeto.causa = this.myForm.get('causa').value;
		this.objeto.dateHappend = this.myForm.get('dateHappend').value;
		this.objeto.tipo = this.myForm.get('tipo').value;
		this.objeto.categoria = this.myForm.get('categoria').value;
		
		//Crea una key para el objeto que se esta guardando
		this.storage.length().then((num) => {
			let messi = num + 1;
			let key = ""+messi;
			console.log(key);
		//Guardo el objeto en storage
			let stringfyObj = JSON.stringify(this.objeto, null);
			this.storage.set(key , stringfyObj);
		});
		console.log(this.objeto);
		
		
	}

	ionViewWillLoad() {
//		const data = this.navParams.get('data');
	}
	dismiss() {
		this.viewCtrl.dismiss();
	}
	showToast() {
		let toast = this.toastCtrl.create({
			message: 'Transaccion agregada correctamente',
			duration: 3000
		});
		toast.present();
	}
}
