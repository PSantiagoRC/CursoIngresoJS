/* 
Pablo Santiago Rodriguez Castro
e/s 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("Ingrese su nombre", "natalia natalia");
	document.getElementById('txtIdNombre').value = nombreIngresado;
	alert(nombreIngresado);
}

