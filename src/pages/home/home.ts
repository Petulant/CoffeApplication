import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  checked1;
  checked2;
  increment=0;
   total=0;
   Name;
   Summary:number;
   message : string;
   price=8;


  constructor(public navCtrl: NavController) {
   this.Summary=0;
  
  }
   myButton(){
   this.Summary=1;
   this.total=this.price *  this.increment;
 
   }
  ADD()
  {
    if(this.increment>=0){
      this.increment+=1;
  
    }

  }

  MINUS()
  {

    if(this.increment>=1){
      this.increment-=1;
    }

  }
  Reset(){
    this.Summary=0;
    this.checked1=false;
    this.checked2=false;
    this.increment=0;
    this.Name=" ";
    this.total=0;

  }
 
 
}
