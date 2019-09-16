window.onload = function(){
  test();
};

function test_Params(){
  let xhttp = new XMLHttpRequest();
  let nombre = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  xhttp.open("POST","Backend/test_param.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("nombre="+nombre);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  };
}

function test(){
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET","Backend/test.php",true);
  xhttp.send();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  };
}

