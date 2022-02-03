/*
Pablo Santiago Rodriguez Castro
e/s 6
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function sumar()
{	
	let num1;
	let num2;
	let suma;
	
	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;

	alert("La suma es: " + suma);
}

// No ahorrar lineas, parseInt en linea distinta. Sí se puede definir variable int sustituyendo el valor string.