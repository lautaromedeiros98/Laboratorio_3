function MostrarNumeroPalabra(numero:number,palabra?:string):void
{
    if(palabra!==undefined)
    {
        for(var i=0;i<numero;i++)
        {
            console.log(palabra+"\n");
        }
    }
    else
    {
        console.log(numero.toString().charAt(1) + numero.toString().charAt(0));
    }
}