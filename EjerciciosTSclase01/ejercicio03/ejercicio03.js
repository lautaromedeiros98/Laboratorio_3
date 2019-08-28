function MostrarNumeroPalabra(numero, palabra) {
    if (palabra !== undefined) {
        for (var i = 0; i < numero; i++) {
            console.log(palabra + "\n");
        }
    }
    else {
        console.log(numero.toString().charAt(1) + numero.toString().charAt(0));
    }
}
MostrarNumeroPalabra(4, "hola");
MostrarNumeroPalabra(14);
