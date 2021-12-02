import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeudorSolicitudComponent } from './codeudor-solicitud.component';

describe('CodeudorSolicitudComponent', () => {
  let component: CodeudorSolicitudComponent;
  let fixture: ComponentFixture<CodeudorSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeudorSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeudorSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
