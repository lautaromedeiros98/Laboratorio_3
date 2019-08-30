function MostrarVeintePrimos() {
    var retorno = "";
    var contador = 0;
    for (var i = 0; contador <= 20; i++) {
        if ((i % 2) == 1) {
            console.log(i);
            contador++;
        }
    }
}
MostrarVeintePrimos();
