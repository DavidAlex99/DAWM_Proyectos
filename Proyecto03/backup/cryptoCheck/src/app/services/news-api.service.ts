import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private http:HttpClient) { }

  topHeadlinesApiUrl = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d86334e0aebb45e8b6cb8f7fa8bb5d77";

  topHeadlines():Observable<any>{
    return this.http.get(this.topHeadlinesApiUrl);
  }
}
