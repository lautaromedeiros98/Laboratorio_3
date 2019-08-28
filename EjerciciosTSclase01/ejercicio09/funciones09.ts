function CuboFactorial(numero:number):number
{
    if(numero>0)
    {
        Factorial2(numero);
    }
    return(MostrarCuboNumero2(numero));
}

function Factorial2(numero:number):void
{
    var resultado=1;
    var resultado2=0;
    for(var i=0;i<numero;i++)
    {
        resultado+=resultado*i;
    }
    console.log("Numero: " + numero + " Factorial: " + resultado);
}

function MostrarCuboNumero2(numero:number):number
{
    return Math.pow(numero,3);
}