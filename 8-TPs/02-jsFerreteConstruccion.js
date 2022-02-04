/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let alambre;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo)
	ancho = parseInt(ancho)

	alambre = 3 * (2 * largo + 2 * ancho)

	alert("Se requieren "+ alambre + "unidades de alambre para el perímetro rectangular.")
}
function Circulo () 
{
	let radio;
	let alambre;

	radio = document.getElementById("txtIdRadio").value;


	radio = parseInt(radio);

	alambre = 3 * 2 * 3.14 * radio;

	alert("Se requieren "+ alambre + "unidades de alambre para el perímetro circular.");
}
function Materiales () 
{
	let largo;
	let ancho;
	let superficie;
	let cemento;
	let cal;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	superficie = largo * ancho;
	cemento = 2 * superficie;
	cal = 3 * superficie;

	alert("Se requieren "+ cemento + " bolsas de cemento y " + cal + " bolsas de cal para un contrapiso de " + superficie + " metros cuadrados.");
}