enum Mes
{
  Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre
}
var i :number;
for(i=1;i<13;i++)
{
  console.log("Mes: " + Mes[i-1] +" Numero: " + i);
}
