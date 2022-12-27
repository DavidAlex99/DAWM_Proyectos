import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { } 

  obtenerDatosCoin(){
    return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  }

  obtenerDatosNoticia(){
    return this.http.get("https://newsapi.org/v2/everything?q=Apple&from=2022-12-27&sortBy=popularity&apiKey=d86334e0aebb45e8b6cb8f7fa8bb5d77");
  }
  
}

