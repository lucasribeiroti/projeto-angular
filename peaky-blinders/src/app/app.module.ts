import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreComponent } from './sobre/sobre.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { TemporadasComponent } from './temporadas/temporadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SobreComponent,
    PersonagensComponent,
    TemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
