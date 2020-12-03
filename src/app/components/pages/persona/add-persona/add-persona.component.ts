import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {
  addPersonaForm:FormGroup;
  addUsuarioForm:FormGroup;

  constructor(private _fb:FormBuilder,private _personaService:PersonaService,private router:Router) { }

  ngOnInit(): void {
    this.createAddPersonaForm();
  }

  createAddPersonaForm(){
    this.addPersonaForm = this._fb.group({
      Nombre:new FormControl("",[Validators.required]),
      Apellidos: new FormControl("",[Validators.required]),
      Edad: new FormControl("",[Validators.required]),
      Telefono:new FormControl("",[Validators.required]),
      Correo: new FormControl("",[Validators.required]),
      DNI:new FormControl("",[Validators.required])
    })
  }
  addPersona(){
    console.log(this.addPersonaForm.value)
    if(this.addPersonaForm.valid){
      
    this._personaService.addPersona(this.addPersonaForm.value).subscribe(        
      response=>{
      Swal.fire('Nueva Persona', `Creado con exito`,"success")
      this.router.navigate(['/persona/user'])      
    })
    }else{
      Swal.fire('Campos imcompletos', `Complete campos`,"error") 
    }
 
  }

}
