import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopToolbarComponent } from './layout/top-toolbar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SearchBarComponent } from './components/search-bar/search-barcomponent';
import { CustomTextDisplayPipe } from './pipes/custom.text.display-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    SearchBarComponent,
    DataTableComponent,
    CustomTextDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomTextDisplayPipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
