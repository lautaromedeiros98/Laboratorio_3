/// <reference path ="Persona.ts"/>
namespace Ejercicio03
{
    export class Empleado extends Persona
    {
      private _legajo:number;
      private _sueldo:number;

      public constructor(nombre:string,apellido:string,dni:number,sexo:string,legajo:number,sueldo:number)
      {
        super(apellido,dni,nombre,sexo);
        this._legajo=legajo;
        this._sueldo=sueldo;
      }

      public GetLegajo():number
      {
        return this._legajo;
      }

      public GetSueldo():number
      {
        return this._sueldo;
      }

      public Hablar(idioma:string):string
      {
        return "El empleado habla : " + idioma;
      }

      public ToString():string
      {
        return super.ToString()+ " Legajo: " + this._legajo + " Sueldo "+ this._sueldo;
      }

    }
}
