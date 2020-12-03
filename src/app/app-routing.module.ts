import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/pages/carrito/carrito.component';
import { CartaComponent } from './components/pages/carta/carta.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { AddPersonaComponent } from './components/pages/persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './components/pages/persona/edit-persona/edit-persona.component';
import { PersonaComponent } from './components/pages/persona/persona/persona.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  {
  path:'',component:LoginComponent
  },
  {
  path:'menu',component:LayoutComponent,
  children:[
    
 {
  path: 'listarpersona',component:PersonaComponent
 },
 {
  path: 'addPersona',component:AddPersonaComponent
 },
 {
   path:'user',component:UsersComponent
 },
 {
  path:'editPersona/:id',component:EditPersonaComponent 
 },
 {
   path:'carta',component:CartaComponent
 },
 {
   path:'carrito',component:CarritoComponent
 }
  ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
