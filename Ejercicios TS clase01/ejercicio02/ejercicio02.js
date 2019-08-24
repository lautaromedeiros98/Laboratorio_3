"use strict";
var Mes;
(function (Mes) {
    Mes[Mes["Enero"] = 0] = "Enero";
    Mes[Mes["Febrero"] = 1] = "Febrero";
    Mes[Mes["Marzo"] = 2] = "Marzo";
    Mes[Mes["Abril"] = 3] = "Abril";
    Mes[Mes["Mayo"] = 4] = "Mayo";
    Mes[Mes["Junio"] = 5] = "Junio";
    Mes[Mes["Julio"] = 6] = "Julio";
    Mes[Mes["Agosto"] = 7] = "Agosto";
    Mes[Mes["Septiembre"] = 8] = "Septiembre";
    Mes[Mes["Octubre"] = 9] = "Octubre";
    Mes[Mes["Noviembre"] = 10] = "Noviembre";
    Mes[Mes["Diciembre"] = 11] = "Diciembre";
})(Mes || (Mes = {}));
var i;
for (i = 1; i < 13; i++) {
    console.log("Mes: " + Mes[i - 1] + " Numero: " + i);
}
//# sourceMappingURL=ejercicio02.js.map