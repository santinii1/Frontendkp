import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
