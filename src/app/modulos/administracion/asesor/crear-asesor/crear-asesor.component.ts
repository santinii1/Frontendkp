import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
