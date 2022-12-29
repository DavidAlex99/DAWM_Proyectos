import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent {

  constructor(private service:NewsAPIService) { }

  topHeadlinesResult:any = [];

  ngOnInit(): void{

    this.service.topHeadlines().subscribe((result)=>{
      console.log(result);

      this.topHeadlinesResult = result.articles;
    })

  }
}
