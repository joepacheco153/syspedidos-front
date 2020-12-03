import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/pages/users/users.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/pages/persona/persona/persona.component';
import { AddPersonaComponent } from './components/pages/persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './components/pages/persona/edit-persona/edit-persona.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { CarritoComponent } from './components/pages/carrito/carrito.component';
import { CartaComponent } from './components/pages/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    UsersComponent,
    LoginComponent,
    LayoutComponent,
    CarritoComponent,
    CartaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
