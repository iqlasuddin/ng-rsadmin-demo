import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecellReaderComponent } from './execell-reader/execell-reader.component';
import { DraftGeneratorComponent } from './draft-generator/draft-generator.component';
import { TableDraftComponent } from './draft-generator/table-draft/table-draft.component';
import { ProductDraftComponent } from './draft-generator/product-draft/product-draft.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExecellReaderComponent,
    DraftGeneratorComponent,
    TableDraftComponent,
    ProductDraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
