function totalizar(){
		
	var neto1050 = parseFloat(document.getElementById("cajaneto1050").value);
	var neto21 = parseFloat(document.getElementById("cajaneto21").value);
	var neto27 = parseFloat(document.getElementById("cajaneto27").value);
	var exento = parseFloat(document.getElementById("cajaexento").value);
	var neto = parseFloat(neto1050 + neto21 + neto27 + exento)
	
	var iva1050 = parseFloat(document.getElementById("cajaiva1050").value);
	var iva21 = parseFloat(document.getElementById("cajaiva21").value);
	var iva27 = parseFloat(document.getElementById("cajaiva27").value);
	var alicuotas = parseFloat(iva1050 + iva21 + iva27)
	
	var retIVA = parseFloat(document.getElementById("cajaretIVA").value);
	var retGcias = parseFloat(document.getElementById("cajaretGcias").value);
	var retIB = parseFloat(document.getElementById("cajaretIB").value);
	var retenciones = parseFloat(retIVA + retGcias + retIB)
	
	var resultado = neto + alicuotas + retenciones;
	
	document.getElementById("cajatotal").value = resultado;
	             
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
	