/*1.	Para el departamento de facturación:
Pa. Rodriguez Castro
TP1

A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;
	
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;

	alert("El total es: $" + suma);
}

function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;
	
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	promedio = (precio1 + precio2 + precio3) / 3

	alert("El precio promedio es: $" + promedio)
}
	
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let final;
	
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	IVA = 21/100

	final = (precio1 + precio2 + precio3)*(1 + IVA)

	alert("El precio con IVA es: $" + final);
}