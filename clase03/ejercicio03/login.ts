/// <reference path ="Empleado.ts"/>
if(localStorage.getItem("empleados")==null)
{
  localStorage.setItem("empleados","Lautaro-628,Chaza-456,Rosa-456");
}

function Loguear()
{
  var nombre=(<HTMLInputElement>document.getElementById("nombre")).value;
  var legajo=(<HTMLInputElement>document.getElementById("legajo")).value;
  var i=0;
  var otroString=null;
  var ls = localStorage.getItem("empleados");
  if(ls!=null)
  {
    var stringPartido = ls.split(",");
    for(i=0;i<3;i++)
    {
      otroString=stringPartido[i].split("-");
      if(otroString[0]==nombre && otroString[1]==legajo)
      {
        alert("El usuario ya esta ingresado");
        window.location.href="principal.html";
        break;
      }
    }
  }

}
