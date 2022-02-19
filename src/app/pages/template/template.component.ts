import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  usuario = {
    nombre: 'Alejandro', //establecer un valor por defecto al formulario
    apellido: 'Toro',
    correo: 'alejotoro@gamial.com',
    pais: 'COL',
    genero: ''
  }

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
                    .subscribe( paises => {
                      this.paises = paises;
                      this.paises.unshift({
                        nombre: '[Seleccione país]',
                        codigo: ''
                      })
                      /* console.log(this.paises); */
                    })

  }

  guardar( forma: NgForm ) {
    
    if( forma.invalid ) {
      Object.values( forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log("forma", forma.value);
    console.log("dio click")

  }

}

