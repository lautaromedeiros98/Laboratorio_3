	window.onload=Manejador;
	function Manejador()
	{
		document.getElementById("palabraJavaScript").onclick=PedirNumeroMostrar;
	}
	
	function PedirNumeroMostrar() 
	{
		var numero = prompt('Ingrese un numero');
		if(!isNaN(numero))
		{
			alert('Ingresaste el numero: ' + numero + " capo");
		}
		else
		{
			alert("Pusiste cualquier cosa gil");
		}
	}