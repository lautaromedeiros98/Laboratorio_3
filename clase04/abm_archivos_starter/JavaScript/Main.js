function MostrarGrilla() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("queHago=mostrarGrilla");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("divGrilla").innerHTML = xhttp.responseText;
        }
    };
}
function Logear() {
    var itsOk = true;
    var nombre = document.getElementById("divGrilla").value;
    var pass = document.getElementById("divGrilla").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./login.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nombre=" + nombre + "&pass=" + pass + "&usuario=ok");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
        }
        else {
            itsOk = false;
        }
    };
    return itsOk;
}
/*Logear y verificar si estamos logeados.verificaion.php->verificar->ok||no_Ok
cargarListado()
*/ 
