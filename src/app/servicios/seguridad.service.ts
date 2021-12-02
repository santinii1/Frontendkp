import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ModeloIdentificacion } from '../modelos/identificacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  Identificar(usuario: string, contraseña: string): Observable <ModeloIdentificacion> {
    return this.http.post<ModeloIdentificacion>(`${this.url}/identificarAdministrador`, {
      usuario: usuario,
      clave: contraseña
    },{
      headers: new HttpHeaders({

      })
    })

}

}
