import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  Suma():void{
    this.resultado = this.numero1 + this.numero2;
  } 

  Resta():void{
    this.resultado = this.numero1 - this.numero2;
  } 

  Multi():void{
    this.resultado = this.numero1 * this.numero2;
  } 
  
  Divi():void{
    if(this.numero1 != 0)
      this.resultado = this.numero1 / this.numero2;
    else
      alert("Error, divicion por 0")
  } 
}
