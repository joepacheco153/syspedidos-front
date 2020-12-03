import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  displayedColumns: string[] = ['idPersona', 'Nombre', 'Apellidos', 'Edad','Telefono','Correo','DNI','Editar','Eliminar'];
 
  

  constructor(private _personaService:PersonaService,private router: Router) { }

   personaL:Persona[];
   PersonaLista$:Observable<Persona[]>  

  ngOnInit():void{

    this.PersonaLista$= this._personaService.getPersonas();
     this._personaService.getPersonas().subscribe(data=>{
      this.personaL = data;
     });
  }
  
  getPersonas(){  
    this._personaService.getPersonas().subscribe(); 
   } 
   
 public deletePersona(idPersona:number){
  Swal.fire({
    title: 'Estas seguro?',
    text: "No podras reverti esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this._personaService.deletePersona(idPersona).subscribe(
        response=>{
          this.getPersonas()
          Swal.fire(
            'Eliminado!',
            'El registro ha sido eliminado.',
            'success')
        })        
    }
  }) 
   
    
  }
}
