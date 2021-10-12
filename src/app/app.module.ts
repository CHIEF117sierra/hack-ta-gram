import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaIngresoComponent } from './vista-ingreso/vista-ingreso.component';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { VistaMensajesComponent } from './vista-mensajes/vista-mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaIngresoComponent,
    VistaRegistroComponent,
    VistaMensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  ocultando = ()=>{alert("Ocultando...")}
}
