import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../components/pages/persona/persona/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';
  private urlPersona= this.url+'persona/';

  constructor(private http:HttpClient){

  }
  getPersonas():Observable<Persona[]>{
    
    return this.http.get<Persona[]>(this.urlPersona, {headers:this.htpHeaders});
    
  }
  
  addPersona(persona:Persona){
    
    return this.http.post(this.urlPersona, persona, {headers:this.htpHeaders});  
  }

  deletePersona(id:number):Observable<number>{
    return this.http.delete<number>(this.urlPersona+id,{headers:this.htpHeaders});
  }

  getPersonaById(id:number){

    return this.http.get<Persona[]>(this.urlPersona+id, {headers:this.htpHeaders});
  }

  updatePersona(persona:Persona){
    return this.http.put(this.urlPersona+"/edit",persona, {headers:this.htpHeaders});
  }
}
