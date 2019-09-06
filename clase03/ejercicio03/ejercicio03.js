var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ejercicio03;
(function (Ejercicio03) {
    var Persona = /** @class */ (function () {
        function Persona(apellido, dni, nombre, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Persona.prototype.GetApellido = function () {
            return this._apellido;
        };
        Persona.prototype.GetDni = function () {
            return this._dni;
        };
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.ToString = function () {
            return "Nombre: " + this._nombre + " Apellido: " + this._apellido + " Dni: " + this._dni + " Sexo: " + this._sexo;
        };
        return Persona;
    }());
    Ejercicio03.Persona = Persona;
})(Ejercicio03 || (Ejercicio03 = {}));
/// <reference path ="Persona.ts"/>
var Ejercicio03;
(function (Ejercicio03) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, apellido, dni, nombre, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.GetLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.GetSueldo = function () {
            return this._sueldo;
        };
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla : " + idioma;
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " Legajo: " + this._legajo + " Sueldo " + this._sueldo;
        };
        return Empleado;
    }(Ejercicio03.Persona));
    Ejercicio03.Empleado = Empleado;
})(Ejercicio03 || (Ejercicio03 = {}));
/// <reference path ="Empleado.ts"/>
var a = new Ejercicio03.Empleado("Lautaro", "Medeiros", 41551723, "Masculino", 628, 44500);
var h = new Ejercicio03.Empleado("Chaza", "Gil", 123, "Femenino", 456, 789);
console.log(a.ToString());
console.log(a.Hablar("Castellano"));
console.log(h.ToString());
console.log(h.Hablar("Ingles"));
