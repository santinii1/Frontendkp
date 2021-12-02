import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
