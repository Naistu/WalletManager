import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrayGanancia= [];
  arrayGasto= [];
  public contGanancia : number = 0;
  public contGasto : number = 0;

  constructor(public storage: Storage) {
    this.dataTake()

  }
  // Doughnut  
  public doughnutChartLabels:string[] = ['Ganancias', 'Gastos'];
  public doughnutChartData:Array<any> = []
  public doughnutChartType:string = 'doughnut';
  public chartColors: any[] = [
      { 
        backgroundColor:["#f8bbd0","#b2dfdb"], 
      }];

  // Bar Chartt
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Ganancias'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Gastos'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
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
        });
      } 
      console.log(this.doughnutChartData);
    });

  }  

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }  

  //  // events
  //public chartClicked(e:any):void {
  //  console.log(e);
  //}
  //
  //public chartHovered(e:any):void {
  //  console.log(e);
  //}
  //  constructor(public navCtrl: NavController) {
  //  
  //
  //  }

}
