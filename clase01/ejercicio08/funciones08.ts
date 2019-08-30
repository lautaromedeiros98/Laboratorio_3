function Factorial(numero:number):void
{
    var resultado=1;
    var resultado2=0;
    for(var i=0;i<numero;i++)
    {
        resultado+=resultado*i;
    }
    console.log("Numero: " + numero + " Factorial: " + resultado);
}