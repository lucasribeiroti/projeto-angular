import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { PersonagensComponent } from './paginas/personagens/personagens.component';
import { TemporadasComponent } from './paginas/temporadas/temporadas.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'temporadas', component: TemporadasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
