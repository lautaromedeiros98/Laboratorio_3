function sumaDivisores(n) {
    var raiz = Math.sqrt(n);
    var tmp = n;
    var respuesta = 0;
    while (n % 2 == 0) {
        respuesta += 2;
        n >>= 1;
    }
    for (var i = 3; i <= raiz; i += 2) {
        if (n % i == 0) {
            respuesta += sumaDigitos(i);
            n = n / i;
            i -= 2;
        }
    }
    if (n != tmp && n != 1)
        respuesta += sumaDigitos(n);
    return respuesta;
}
function sumaDigitos(n) {
    var respuesta = 0;
    while (n > 0) {
        respuesta += (n % 10);
        n = n / 10;
    }
    return respuesta;
}
function esPrimo(n) {
    var raiz = Math.sqrt(n);
    if (n == 2)
        return true;
    if (n % 2 == 0)
        return false;
    for (var i = 3; i <= raiz; i += 2)
        if (n % i == 0)
            return false;
    return true;
}
function Hola() {
    var numero = 0;
    var contador = 0;
    while (contador < 5) {
        numero++;
        if (sumaDigitos(numero) == sumaDivisores(numero)) {
            console.log(numero + " Es un numero smith");
            contador++;
        }
    }
}
Hola();
