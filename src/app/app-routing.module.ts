import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertaComponent } from './components/alerta/alerta.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {path: '', component: ConsultarComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'detalle/:id/alerta', component: AlertaComponent},
  {path: 'alerta', component: AlertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
