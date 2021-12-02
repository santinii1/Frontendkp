import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptarSolicitudComponent } from './aceptar-solicitud/aceptar-solicitud.component';
import { CodeudorSolicitudComponent } from './codeudor-solicitud/codeudor-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { ModificarSolicitudComponent } from './modificar-solicitud/modificar-solicitud.component';
import { RealizarSolicitudComponent } from './realizar-solicitud/realizar-solicitud.component';

const routes: Routes = [
  {
    path:'realizar-solicitud',
    component: RealizarSolicitudComponent
  },
  {
    path:'modificar-solicitud',
    component: ModificarSolicitudComponent
  },
  {
    path: 'aceptar-solicitud',
    component: AceptarSolicitudComponent
  },
  {
    path: 'eliminar-solicitud',
    component: EliminarSolicitudComponent
  },
  {
    path: 'codeudor-solicitud',
    component: CodeudorSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
