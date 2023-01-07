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

  coins: Coin[] = [];

  searchCoin(){
    console.log('buscando')
  }

  constructor(private apicoinService: ApicoinService){

    apicoinService.obtenerDatosCoin().subscribe(respuesta => {
      this.coins = respuesta as Array<Coin>
      console.log(respuesta);
    })

  }

}
