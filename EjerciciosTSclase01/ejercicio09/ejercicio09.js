function CuboFactorial(numero) {
    if (numero > 0) {
        Factorial2(numero);
    }
    return (MostrarCuboNumero2(numero));
}
function Factorial2(numero) {
    var resultado = 1;
    var resultado2 = 0;
    for (var i = 0; i < numero; i++) {
        resultado += resultado * i;
    }
    console.log("Numero: " + numero + " Factorial: " + resultado);
}
function MostrarCuboNumero2(numero) {
    return Math.pow(numero, 3);
}
CuboFactorial(9);
console.log("Numero: -9 Cubo: " + CuboFactorial(-9));
