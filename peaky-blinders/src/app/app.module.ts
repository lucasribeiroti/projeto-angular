import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PersonagensComponent } from './paginas/personagens/personagens.component';
import { TemporadasComponent } from './paginas/temporadas/temporadas.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { MenuOpcoesComponent } from './componente/menu-opcoes/menu-opcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    PersonagensComponent,
    TemporadasComponent,
    PaginaPrincipalComponent,
    CabecalhoComponent,
    RodapeComponent,
    MenuOpcoesComponent
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
