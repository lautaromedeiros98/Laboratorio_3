function MostrarNombreEdad():void
{
    var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
    var edad:number =parseInt( (<HTMLInputElement>document.getElementById("edad")).value);
    (<InnerHTML>document.getElementById('chaza')).innerHTML="Nombre: " + nombre + " Edad: " + edad
    alert("Nombre: " + nombre + " Edad: " + edad);
    console.log("Nombre: " + nombre + " Edad: " + edad);
  }
