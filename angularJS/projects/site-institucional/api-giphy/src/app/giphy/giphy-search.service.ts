import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) { }
  
  pesquisarGiphy( limit: string, term: string ): Observable<Response> {
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
    return this.http.get<Response>(url);
  }
}
