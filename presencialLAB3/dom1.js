/*
console.log(document.body);
console.log(document.links);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
*/

const $elemento = document.getElementById("parrafo_uno");
const $imagenes = document.getElementsByClassName("imagenes");
//const $tarjetas = document.getElementsByClassName("tarjeta");

$parrafo_uno = document.querySelector("#parrafo_uno");

$elemento.setAttribute("name","parrafito");

//data-description <- atributos personalizados

if($elemento.hasAttribute("name"))
{
    alert("Tiene el atributo!!!")
    console.log($elemento.getAttribute("name"));
}

$tarjeta1 = document.querySelector(".tarjeta");
$tarjeta1.setAttribute("style","background-color:yellow");

$tarjeta1.classList.add("rotar-45");

//innerText, textContent, innerHtml, 
$parrafo_uno.outerHTML = '<p> hola </p>';

const $newTarjeta = document.createElement('figure');
const $newImagen = document.createElement('img');
const $newFig = document.createElement("figcaption");
const $text = document.createTextNode('any');
const $refSection = document.querySelector('.imagenes');

$newImagen.setAttribute("src","https://placeimg.com/100/100/animals");
$newImagen.setAttribute("alt","cualquiera"); 
$newFig.textContent = 'any';

$newTarjeta.appendChild($newImagen);
$newTarjeta.appendChild($newFig);
$newFig.appendChild($text);

//inyeccion al DOM
$refSection.appendChild($newTarjeta);

//estudiar Fragments