function totalizar(){		

	document.getElementById("cajatotal").value = parseFloat(document.getElementById("cajaneto1050").value) +
		parseFloat(document.getElementById("cajaneto21").value) + 
		parseFloat(document.getElementById("cajaneto27").value) + 
		parseFloat(document.getElementById("cajaexento").value) + 
		parseFloat(document.getElementById("cajaiva1050").value) + 
		parseFloat(document.getElementById("cajaiva21").value) + 
		parseFloat(document.getElementById("cajaiva27").value) + 
		parseFloat(document.getElementById("cajaretIVA").value) + 
		parseFloat(document.getElementById("cajaretGcias").value) + 
		parseFloat(document.getElementById("cajaretIB").value)
	}

function validaNeto1050(){
	var control = parseFloat(document.getElementById('cajaneto1050').value)
		if (isNaN(control)) {
        	document.getElementById("cajaneto1050").value = 0;
		} else {
		document.getElementById("cajaiva1050").value = control * 0.105;
		totalizar();
		}
}

function validaNeto21(){
	var control = parseFloat(document.getElementById('cajaneto21').value)
		if (isNaN(control)) {
        	document.getElementById("cajaneto21").value = 0;
		} else {
		document.getElementById("cajaiva21").value = control * 0.21;
		totalizar();
		}
}
	
function validaNeto27(){
	var control = parseFloat(document.getElementById('cajaneto27').value)
		if (isNaN(control)) {
        	document.getElementById("cajaneto27").value = 0;
		} else {
		document.getElementById("cajaiva27").value = control * 0.27;
		totalizar();
		}
}

function validaexento(){
		var control = parseFloat(document.getElementById('cajaexento').value)
		if (isNaN(control)) {
        	document.getElementById("cajaexento").value = 0;
        } else {
        totalizar();
		}
}

function validaiva1050(){
	var control = parseFloat(document.getElementById('cajaiva1050').value)
		if (isNaN(control)) {
        	document.getElementById("cajaiva1050").value = 0;
		} else {
		totalizar();
		}
}

function validaiva21(){
		var control = parseFloat(document.getElementById('cajaiva21').value)
		if (isNaN(control)) {
        	document.getElementById("cajaiva21").value = 0;
        } else {
        totalizar();
		}
}

function validaiva27(){
		var control = parseFloat(document.getElementById('cajaiva27').value)
		if (isNaN(control)) {
        	document.getElementById("cajaiva27").value = 0;
        } else {
        totalizar();
		}
}

function validaretIVA(){
		var control = parseFloat(document.getElementById('cajaretIVA').value)
		if (isNaN(control)) {
        	document.getElementById("cajaretIVA").value = 0;
        } else {
        totalizar();
		}
}

function validaretGcias(){
		var control = parseFloat(document.getElementById('cajaretGcias').value)
		if (isNaN(control)) {
        	document.getElementById("cajaretGcias").value = 0;
        } else {
        totalizar();
		}
}

function validaretIB(){
		var control = parseFloat(document.getElementById('cajaretIB').value)
		if (isNaN(control)) {
        	document.getElementById("cajaretIB").value = 0;
        } else {
        totalizar();
		}
}

function msj(){
	var msj = "¿Estamos bien los 33?"
		alert (msj);
}
	