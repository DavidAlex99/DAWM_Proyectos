import { Component } from '@angular/core';
import { Coin } from '../../interface/coin';
import { ApicoinService } from '../../services/apicoin.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  searchText = '';

  selectedIndex= '';

  coins: Coin[] = [];
  coins2: Coin[] = [];

  

  constructor(private apicoinService: ApicoinService){

    apicoinService.obtenerDatosCoin().subscribe(respuesta => {
      this.coins = respuesta as Array<Coin>
      console.log(respuesta);
    })
  }

  // METODO PARA QUE SE MUESTRE EL INDICE DE SELECCION
  enSeleccion(value:string):void{
    this.selectedIndex = value;
    console.log(this.selectedIndex);
  }

  searchCoin(){
    console.log('buscando')
  }

  // METODO PARA CREAR LAS TABLAS CON FILTRO, CON CONDICIONALES
  getConfigurations(){
    // 1. se toma el valor del indice
    console.log('Se dio click')
    if(this.selectedIndex == "1"){
      console.log("primera condicional");
      this.apicoinService.sortMCAscen().subscribe(respuesta2 => {
        this.coins2 = respuesta2 as Array<Coin>
        console.log(respuesta2);
      })
    } 
    if(this.selectedIndex == "2"){
      console.log("segunda condicional");
      this.apicoinService.sortVAscen().subscribe(respuesta2 => {
        this.coins2 = respuesta2 as Array<Coin>
        console.log(respuesta2);
      })
    }
    if(this.selectedIndex == "3"){
      console.log("tercera condicional");
      this.apicoinService.sortVDesc().subscribe(respuesta2 => {
        this.coins2 = respuesta2 as Array<Coin>
        console.log(respuesta2);
      })
    }
    if(this.selectedIndex == "4"){
      console.log("cuarta condicional");
      this.apicoinService.sortIDDesc().subscribe(respuesta2 => {
        this.coins2 = respuesta2 as Array<Coin>
        console.log(respuesta2);
      })
    }
  }

  

}
