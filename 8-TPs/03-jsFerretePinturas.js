/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
	let temperaturaConvertida;

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
	temperaturaIngresada = parseInt(temperaturaIngresada);
	temperaturaConvertida = (temperaturaIngresada - 32) * 5 / 9 ;

	alert(temperaturaIngresada + " Fahrenheit son " + temperaturaConvertida + " centígrados.");
}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
	let temperaturaConvertida;

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
	temperaturaIngresada = parseInt(temperaturaIngresada);
	temperaturaConvertida = temperaturaIngresada * 9 / 5 + 32;

	alert(temperaturaIngresada + " centígrados son " + temperaturaConvertida + " Fahrenheit.");
}
