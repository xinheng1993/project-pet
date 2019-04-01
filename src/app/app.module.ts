import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';

@NgModule({
  declarations: [
    AppComponent, //
    HomeComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
