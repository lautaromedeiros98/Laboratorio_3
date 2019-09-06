/// <reference path ="Empleado.ts"/>

let a = new Ejercicio03.Empleado("Lautaro","Medeiros",41551723,"Masculino",628,44500);
let h = new Ejercicio03.Empleado("Chaza","Gil",123,"Femenino",456,789);

console.log(a.ToString());
console.log(a.Hablar("Castellano"));
console.log(h.ToString());
console.log(h.Hablar("Ingles"));

