function Palindromos(palindromo:string):string
{
    var fraseCambiada:string="";
    for(var i=0;i<palindromo.length;i++)
    {
        if(palindromo.charAt(i)!=" ")
        {
            fraseCambiada+=palindromo.charAt(i);
        }
    }
    if(fraseCambiada==InvertirFrase(palindromo))
    {
        return "La frase '"+palindromo+"' Es un palindromo";
    }
    return "La frase '"+palindromo+"' no es un palindromo";
}

function InvertirFrase(frase:string):string
{
    var fraseCambiada:string="";
    var j:number=frase.length;
    for(var i=0;i<frase.length+1;i++)
    {
        if(frase.charAt(j)!=" ")
        {
            fraseCambiada+=frase.charAt(j);
        }
        j--;
    }
    return fraseCambiada;
}