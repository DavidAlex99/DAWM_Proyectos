import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicoinService {

  constructor(private http:HttpClient) { }

  obtenerDatosCoin(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  }

  sortMCAscen(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&per_page=100&page=1&sparkline=false");
  }

  sortVAscen(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=100&page=1&sparkline=false");
  }

  sortVDesc(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false");
  }

  sortIDDesc(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=id_desc&per_page=100&page=1&sparkline=false");
  }
}
