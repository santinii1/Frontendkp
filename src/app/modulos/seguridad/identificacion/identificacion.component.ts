import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from '../seguridad.module';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

fgValidador: FormGroup= this.fb.group(
  {
    'usuario': ['',[Validators.required, Validators.email]],
    'contraseña': ['', [Validators.required]]
  }
); 

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
 }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contraseña = this.fgValidador.controls["contraseña"].value;
    let claveCifrada = CryptoJS.MD5(contraseña).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) =>{
      alert("La persona ya esta registrada");
    }, (error:any) => {
      alert("Persona no Registrada");
    })
  }



}
