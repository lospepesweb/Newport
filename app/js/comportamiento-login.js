/*ESTO SI FUNCIONA CARAJO!

$(document).ready(function(){
	$("form input#Usuario").focus(function(){
		$("this").css({"color":"#a1bb34"});
	});
	$("form input#Usuario").focusout(function(){
		$("this").css({"color":"#ffffff"});
	});
});*/
var intentos =3;
function login(){
var username = document.getElementById('username').value;
var	pass = document.getElementById('pass').value;
	if ( username == "admin" && pass == "123"){
		/*alert("Esta es la que va");*/
		window.location = "html/home.html";
	} else { 
		intentos --; //disminuye 1
		alert("Usuario o contraseña incorrectos. Restan "+intentos+" intentos.");
		if (intentos == 0){
			window.location = "../Newport-Institucional/index.html";
		}
	}
	}