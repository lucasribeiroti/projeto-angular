import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { TemporadasComponent } from './temporadas/temporadas.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'temporadas', component: TemporadasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
