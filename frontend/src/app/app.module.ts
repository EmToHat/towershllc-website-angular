import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// Components
import { HeaderComponent } from './core/layout/header/header.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { MainComponent } from './core/layout/main/main.component';
import { FooterComponent } from './core/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
