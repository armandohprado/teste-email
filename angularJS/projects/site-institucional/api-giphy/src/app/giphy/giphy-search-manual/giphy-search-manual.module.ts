import { NgModule } from '@angular/core';
import { GiphySearchManualComponent} from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
@NgModule({
  declarations: [
    GiphySearchManualComponent
  ],
  imports: [
    
  ],
  exports: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
  bootstrap: []
})
export class GiphySearchManualComponentModule { }
