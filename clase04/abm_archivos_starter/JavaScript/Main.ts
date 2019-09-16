function MostrarGrilla():void{
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST","./administracion.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("queHago=mostrarGrilla");
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            (<InnerHTML> document.getElementById("divGrilla")).innerHTML = xhttp.responseText;
        }
    };
}

function Logear():boolean{
    let itsOk =true;
    let nombre = (<HTMLInputElement> document.getElementById("divGrilla")).value;
    let pass = (<HTMLInputElement> document.getElementById("divGrilla")).value;

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST","./login.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nombre="+nombre+"&pass="+pass+"&usuario=ok");
    
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
        }
        else
        {
            itsOk=false;
        }
    };

    return itsOk;
}

/*Logear y verificar si estamos logeados.verificaion.php->verificar->ok||no_Ok
cargarListado()
*/