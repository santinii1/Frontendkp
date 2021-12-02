import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { RealizarSolicitudComponent } from './realizar-solicitud/realizar-solicitud.component';
import { ModificarSolicitudComponent } from './modificar-solicitud/modificar-solicitud.component';
import { AceptarSolicitudComponent } from './aceptar-solicitud/aceptar-solicitud.component';
import { CodeudorSolicitudComponent } from './codeudor-solicitud/codeudor-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RealizarSolicitudComponent,
    ModificarSolicitudComponent,
    AceptarSolicitudComponent,
    CodeudorSolicitudComponent,
    EliminarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudModule { }
