function Funcionaza(numero) {
    if ((numero % 2) == 0) {
        return "El numero " + numero + " es par";
    }
    return "El numero " + numero + " es impar";
}
console.log(Funcionaza(4));
console.log(Funcionaza(15));
console.log(Funcionaza(1));
