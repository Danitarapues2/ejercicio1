import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  contrasena: string = '';
  fechaNacimiento: string = '';

  guardarDatos(): void {
    console.log('Datos del usuario:');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.contrasena);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
  }
}
