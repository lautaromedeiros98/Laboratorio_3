function MostrarNombreEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    document.getElementById('chaza').innerHTML = "Nombre: " + nombre + " Edad: " + edad;
    alert("Nombre: " + nombre + " Edad: " + edad);
    console.log("Nombre: " + nombre + " Edad: " + edad);
}
