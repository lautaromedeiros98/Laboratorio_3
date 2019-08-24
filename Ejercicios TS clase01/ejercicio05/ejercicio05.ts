var nombreA:string="lautaro";
var apellidoA:string="medeiros";

function MostrarNombreApellido(nombre:string=nombreA,apellido:string=apellidoA) : string
{

  return apellido.toUpperCase() +" "+ nombre.replace(nombre.charAt(0),nombre.charAt(0).toUpperCase());
}


console.log(MostrarNombreApellido(nombreA,apellidoA));
