var mensajes = [];
var vistas = ["registro", "ingreso", "salir", "registrarMensaje", "registrarImaben", "mensajes", "imagenes" ]
function presentarVista(vista){
	var vistas = document.getElementById("vistas").children;
	for(var i = 0; i < vistas.length; i++){
		if(vistas[i].getAttribute("id") == vista){
			vistas[i].style.display = "flex";
		}else{
			vistas[i].style.display = "none";
		}

	}
	event.cancelBubble();
	event.preventDefault();
	return false;
   
}
function presentarRegistro(){
	presentarVista("registro")
}
function presentarIngreso(){
	presentarVista("ingreso")
}
function RegistrarUsuario(){
	var usuario = {}
	var mensajes = "";
	usuario.nombreUsuario = "" + document.getElementById("Reg_nombreUsuario").value;
	usuario.idUsuario = "" + document.getElementById("Reg_idUsuario").value;
	usuario.password1 = "" + document.getElementById("Reg_password1").value;
	usuario.password2 = "" + document.getElementById("Reg_password2").value;
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
	usuario.mensajes = [];
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
function presentarMensajes(){
	var idUsuario = window.sessionStorage.getItem("usuarioActual");
	if((""+ idUsuario != "null") && (""+ idUsuario != "udefined"))
	{   var usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
		if("" + usuarios[idUsuario] !=  "undefined"){
			var usuario = usuarios[idUsuario];
			window.mensajes = usuario.mensajes;
			presentarVista("mensajes");
		}
	}
	event.preventDefault();
	event.cancelBubble();
	return false;

}
function validarIngreso(){
	var usuario = {}
	var mensajes = "";
	usuario.idUsuario = "" + document.getElementById("idUsuario").value;
	usuario.password = "" + document.getElementById("password").value;
	if(usuario.idUsuario == ""){
		mensajes += "\n -El id del usuario es necesario."
	}
	if(usuario.password == ""){
		mensajes += "\n -El password debe de ser requisitado."
	}
	if(mensajes == ""){
		if(window.localStorage.getItem("usuarios") == null){
			window.localStorage.setItem("usuarios", "{}");
		}else{
		}
		var usuarios = JSON.parse("" + window.localStorage.getItem("usuarios"));
		if("" + usuarios[usuario.idUsuario] != "undefined"){
			if("" + usuarios[usuario.idUsuario].password1 == usuario.password){
				window.sessionStorage.setItem("usuarioActual", "" + usuario.idUsuario)
				alert("ingreso exitoso");
				presentarMensajes();

			}
			else{
				alert("No existe ningun usuario con el id y el password indicados.");    
			}
		}else{
			alert("No existe ningun usuario con id (" + usuario.idUsuario + ").");
		}

	}else{
		alert(mensajes);
	}
	
}
function agregarMensajeNuevo(){
	var txtMsj = document.getElementById("mensaje_nuevo").value;
	alert("mensaje: " + txtMsj);
	var msj = {}
	msj.idUsuario = 
	top.mensajes.push(msj)
}
function salir(){
	alert("Salir");
}
