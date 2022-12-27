import { Article } from './article'

export interface Noticias {
    status:string;
    totalResults:number;

    articles: Article[];
}
