function MostrarNombreApellido(nombre:string,apellido:string):string
{
    var nombre2=nombre.replace(nombre.charAt(0),nombre.charAt(0).toUpperCase());
    var apellido2=apellido.replace(apellido.charAt(0),apellido.charAt(0).toUpperCase());
    return(nombre2 +" "+apellido2);
}