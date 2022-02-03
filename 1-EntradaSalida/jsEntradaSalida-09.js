/*
Pablo Santiago Rodriguez Castro
e/s 9 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);
	aumento = prompt("Indique porcentaje de aumento", "Ej. 10")
	aumento = aumento/100
	document.getElementById('txtIdResultado').value = sueldo*(1+ aumento);
}
