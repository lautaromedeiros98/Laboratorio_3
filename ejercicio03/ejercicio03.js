"use strict";
function Funcion(numero, cadena) {
    var i;
    if (cadena === undefined) {
        console.log(numero.toString().charAt(1) + numero.toString().charAt(0));
    }
    else {
        for (i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
}
Funcion(14);
Funcion(4, "Hola");
//# sourceMappingURL=ejercicio03.js.map