import { Component, OnInit, Input } from '@angular/core';
import { VistaIngresoComponent } from './vista-ingreso/vista-ingreso.component';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { VistaMensajesComponent } from './vista-mensajes/vista-mensajes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vista: boolean = false;
  title: string = 'hack-ta-gram';
  vActiva: string = "vIngreso";
  ocultando = ()=>{alert("Ocultando...")};
  presentarVistadeRegistro = ()=>{this.vActiva = "vRegistro";};
  presentarVistadeMensajes = ()=>{this.vActiva = "vMensajes";};
  presentarVistadeIngreso = ()=>{this.vActiva = "vIngreso";};
}
