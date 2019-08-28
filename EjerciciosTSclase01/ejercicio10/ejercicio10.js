function ComprobarPalabra(palabra) {
    var mayuscula = 0;
    var minuscula = 0;
    for (var i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) == palabra.charAt(i).toUpperCase()) {
            mayuscula++;
        }
        else {
            minuscula++;
        }
    }
    if (minuscula == 0) {
        return ("La palabra " + palabra + " esta formada solo por mayusculas");
    }
    if (mayuscula == 0) {
        return ("La palabra " + palabra + " esta formada solo por minusculas");
    }
    return ("La palabra " + palabra + " esta formada por mayusculas y minusculas");
}
console.log(ComprobarPalabra("pedo"));
console.log(ComprobarPalabra("PeDo"));
console.log(ComprobarPalabra("PEDO"));
