import { Component } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';
import { Coin } from '../../interface/coin';

@Component({
  selector: 'app-cryptonews',
  templateUrl: './cryptonews.component.html',
  styleUrls: ['./cryptonews.component.css']
})
export class CryptonewsComponent {

  apiCoinResult:any = [];

  constructor(){
    let apiCoin = JSON.parse(localStorage.getItem("apiCoin")!);

    if(apiCoin){
      this.apiCoinResult = apiCoin as Coin[];
    }
  }
}
