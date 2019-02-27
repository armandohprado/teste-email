import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
    selector:    'appgiphy-search-manual',
    templateUrl: 'giphy-search-manual.component.html'
  })
  export class GiphySearchManualComponent implements OnInit {
    constructor(private giphySearchService: GiphySearchService) {
        
    }
    ngOnInit() {
        
    }
    pesquisarGiphy() {
      this.giphySearchService.pesquisarGiphy('2','happy').
      subscribe( (response: Response )=> {
        console.log(response);
      } );
    }

  }