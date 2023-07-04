import {  Component,  OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  input1 : number | any;
  input2 : number | any;
  error1 : string |any;
  error2 : string |any;
  chart : any;
 constructor(){}


onvalueGiven(){
  this.error2='';
  this.error1='';
  if(this.input1>100 || this.input1 < 0 || isNaN(+this.input1)){
    this.input2 = '';
    this.error1 = 'Please Provide Values from 0 to 100 only.'
    return
  }
if(this.input1){
  this.input2 = 100-this.input1
}else{
  this.input2=''
}

}
isError():boolean{
  if(this.error1 || this.error2){
     return false
  }else {
    return true;
  }
}
onvalueGiven1(){

  this.error2='';
  this.error1='';
  if(this.input2>100 || this.input2 < 0 || isNaN(+this.input2)){
    this.input1='';
    this.error2 = 'Please Provide Values from 0 to 100 only.'
    return
  }
  if(this.input2){
    this.input1 = 100 - this.input2;
  }else{
    this.input1 = '';
    
  }
}
  create(){
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Canvas context not found.");
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['value 1', 'value2'], 
        datasets: [{
          data: [this.input1,this.input2], 
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
        
        }]
      },
      options: {
        responsive: true
        
     }
    })
 }
 ngOnInit(): void {
  if (this.chart) {
    this.chart.destroy();
  }
  this.create()
}

  }


// if(typeof +this.input1 == 'number'){
//   if(this.input1>100 || this.input1 < 0){
//     this.error1='provide 1 to 100'
//   }else{
//     this.input2= 100 - this.input1;
//     this.error1=''
//   }
// }