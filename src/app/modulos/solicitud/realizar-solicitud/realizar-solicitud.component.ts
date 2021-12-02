import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-realizar-solicitud',
  templateUrl: './realizar-solicitud.component.html',
  styleUrls: ['./realizar-solicitud.component.css']
})
export class RealizarSolicitudComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
