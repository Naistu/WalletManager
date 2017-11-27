import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contGanancia : number = 0;
  public contGasto : number = 0;
  public balance : number = 0;
 
  constructor(public navCtrl: NavController,public storage: Storage) {
    this.dataTake()

  }
  // Doughnut  
  public doughnutChartLabels:string[] = ['Gastos', 'Ganancia'];
  public doughnutChartData:Array<any> = []
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [
      { 
        backgroundColor:["#ff5252","#66bb6a"], 
      }];

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
  doRefresh(refresher) {
    this.navCtrl.setRoot(HomePage); 
    this.navCtrl.popToRoot();
    console.log('hizo refresh', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  dataTake() {
    this.storage.keys().then((arrayDeKeys) => {
      console.log(arrayDeKeys); 
      for(let i of arrayDeKeys){
        this.storage.get(i).then((pepe) => {
          let obj = JSON.parse(pepe);
          if(obj.tipo == "1"){
            this.contGanancia = this.contGanancia + parseInt(obj.cant);
            console.log("ganancia: "+ this.contGanancia);
          } else {
            this.contGasto = this.contGasto + parseInt(obj.cant);
            console.log("gastos: "+ this.contGasto);
          }
          this.doughnutChartData = [
            {data: [this.contGasto, this.contGanancia]}
          ];
          this.balance = this.contGanancia - this.contGasto;
          console.log(this.balance);
        });
      } 
      console.log(this.doughnutChartData);
    });

  }  
}
