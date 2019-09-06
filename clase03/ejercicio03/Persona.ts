namespace Ejercicio03
{
  export abstract class Persona
{
  private _apellido:string;
  private _dni:number;
  private _nombre:string;
  private _sexo:string

  public constructor(apellido:string,dni:number,nombre:string,sexo:string)
  {
    this._apellido=apellido;
    this._dni=dni;
    this._nombre=nombre;
    this._sexo=sexo;
  }

  public GetApellido():string
  {
    return this._apellido;
  }

  public GetDni():number
  {
    return this._dni;
  }

  public GetNombre():string
  {
    return this._nombre;
  }

  public GetSexo():string
  {
    return this._sexo;
  }

  public abstract Hablar(idioma:string):string;

  public ToString():string
  {
    return "Nombre: "+this._nombre+" Apellido: "+this._apellido+" Dni: "+this._dni+" Sexo: "+this._sexo;
  }
}

}
