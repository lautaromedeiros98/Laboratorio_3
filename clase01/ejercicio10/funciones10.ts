function ComprobarPalabra(palabra:string):string
{
    var mayuscula=0;
    var minuscula=0;
    for(var i=0;i<palabra.length;i++)
    {
        if(palabra.charAt(i) == palabra.charAt(i).toUpperCase())
        {
            mayuscula++;
        }
        else
        {
            minuscula++;
        }
    }
    if(minuscula==0)
    {
        return("La palabra "+palabra+" esta formada solo por mayusculas");
    }
    if(mayuscula==0)
    {
        return("La palabra "+palabra+" esta formada solo por minusculas");
    }
    return("La palabra "+palabra+" esta formada por mayusculas y minusculas");
}