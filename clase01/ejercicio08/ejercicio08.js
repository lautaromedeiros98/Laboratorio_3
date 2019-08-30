function Factorial(numero) {
    var resultado = 1;
    var resultado2 = 0;
    for (var i = 0; i < numero; i++) {
        resultado += resultado * i;
    }
    console.log("Numero: " + numero + " Factorial: " + resultado);
}
Factorial(4);
Factorial(10);
