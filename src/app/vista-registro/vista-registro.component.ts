import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.css']
})
export class VistaRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registrarUsuario = ()=> {
    alert("registrando usuario");
    let usuario = {
      nombreUsuario:"",
      idUsuario:"",
      password1:"",
      password2:""
    };
    let mensajes = "";
    usuario.nombreUsuario = "" + (document.getElementById("Reg_nombreUsuario") as HTMLInputElement).value;
    usuario.idUsuario = "" + (document.getElementById("Reg_idUsuario") as HTMLInputElement).value;
    usuario.password1 = "" + (document.getElementById("Reg_password1") as HTMLInputElement).value;
    usuario.password2 = "" + (document.getElementById("Reg_password2") as HTMLInputElement).value;
    if(usuario.nombreUsuario == ""){
      mensajes += "\n -El nombre del usuario es necesario."
    }
    if(usuario.idUsuario == ""){
      mensajes += "\n -El id del usuario es necesario."
    }
    
    if(usuario.nombreUsuario == ""){
      mensajes += "\n -El password debe de ser requisitado."
    }
    if(usuario.nombreUsuario == ""){
      mensajes += "\n -La confirmaciónl password debe de ser requisitada."
    }
    if(usuario.password1 != usuario.password2){
      mensajes += "\n -El password no coincide con su confirmación."
    }else{
      if(usuario.password1.length < 8){
        mensajes += "\n -El password del usuario debe de contener al menos 8 caracteres."
      }
    }
    if(mensajes == ""){
      if(window.localStorage.getItem("usuarios") == null){
        window.localStorage.setItem("usuarios", "{}");
      }else{
      }
      var usuarios = JSON.parse("" + window.localStorage.getItem("usuarios"));
      if("" + usuarios[usuario.idUsuario] != "undefined"){
        alert("Ya existe un usuario con el id (" + usuario.idUsuario +  ").")
      }else{
        usuarios[usuario.idUsuario] = usuario;
        window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("El usuario fue registrado exitosamente.");
      }

    }else{
      alert(mensajes);
    }
    
  }
 }
