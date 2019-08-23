"use strict";
var nombreA = "lautaro";
var apellidoA = "medeiros";
function MostrarNombreApellido(nombre, apellido) {
    if (nombre === void 0) { nombre = nombreA; }
    if (apellido === void 0) { apellido = apellidoA; }
    return apellido.toUpperCase() + " " + nombre.replace(nombre.charAt(0), nombre.charAt(0).toUpperCase());
}
console.log(MostrarNombreApellido(nombreA, apellidoA));
//# sourceMappingURL=ejercicio05.js.map