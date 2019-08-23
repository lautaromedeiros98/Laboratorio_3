function Funcion( numero : number , cadena? : string) : void
{
  let i : number;
  if(cadena === undefined)
  {
    console.log(numero.toString().charAt(1)+numero.toString().charAt(0))
  }
  else
  {
  for(i=0;i<numero;i++)
  {
    console.log(cadena);
  }
  }
}

Funcion(14);
Funcion(4,"Hola");
