function SignoZodiaco(fecha) {
    var dia = parseInt(fecha.split("-")[0]);
    var mes = parseInt(fecha.split("-")[1]);
    var año = parseInt(fecha.split("-")[2]);
    if (dia >= 21 && mes == 3 || dia <= 20 && mes == 4) {
        return "Es de aries";
    }
    if (dia >= 21 && mes == 4 || dia <= 20 && mes == 5) {
        return "Es de tauro";
    }
    if (dia >= 21 && mes == 5 || dia <= 21 && mes == 6) {
        return "Es de geminis";
    }
    if (dia >= 22 && mes == 6 || dia <= 22 && mes == 7) {
        return "Es de cancer";
    }
    if (dia >= 23 && mes == 7 || dia <= 23 && mes == 8) {
        return "Es de leo";
    }
    if (dia >= 24 && mes == 8 || dia <= 23 && mes == 9) {
        return "Es de virgo";
    }
    if (dia >= 24 && mes == 9 || dia <= 22 && mes == 10) {
        return "Es de libra";
    }
    if (dia >= 23 && mes == 10 || dia <= 22 && mes == 11) {
        return "Es de escorpio";
    }
    if (dia >= 23 && mes == 11 || dia <= 21 && mes == 12) {
        return "Es de sagitario";
    }
    if (dia >= 22 && mes == 12 || dia <= 19 && mes == 1) {
        return "Es de capricornio";
    }
    if (dia >= 20 && mes == 1 || dia <= 19 && mes == 2) {
        return "Es de acuario";
    }
    return "Es de piscis";
}
/*
Aries | Fecha: Del 21 de marzo al 20 de abril | Astro: Marte y Plutón | Elemento: Fuego
Tauro | Fecha: Del 21 de abril al 20 de mayo | Astro: Venus y Tierra | Elemento: Tierra
Géminis | Fecha: Del 21 de mayo al 21 de junio | Astro: Mercurio | Elemento: Aire
Cáncer | Fecha: Del 22 de junio al 22 de julio | Astro: Luna | Elemento: Agua
Leo | Fecha: Del 23 de julio al 23 de agosto | Astro: Sol | Elemento: Fuego
Virgo | Fecha: Del 24 de agosto al 23 de septiembre | Astro: Mercurio | Elemento: Tierra
Libra | Fecha: Del 24 de septiembre al 22 de octubre | Astro: Venus | Elemento: Aire
Escorpio | Fecha: Del 23 de octubre al 22 de noviembre | Astro: Plutón y Marte | Elemento: Agua
Sagitario | Fecha: Del 23 de noviembre al 21 de diciembre | Astro: Júpiter | Elemento: Fuego
Capricornio | Fecha: Del 22 de diciembre al 19 de enero | Astro: Saturno | Elemento: Tierra
Acuario | Fecha: Del 20 de enero al 19 de febrero | Astro: Urano y Saturno | Elemento: Aire
Piscis | Fecha: Del 20 de febrero al 20 de marzo | Astro: Neptuno y Júpiter | Elemento: Agua*/ 
console.log(SignoZodiaco("1-12-2019"));
console.log(SignoZodiaco("19-10-2019"));
console.log(SignoZodiaco("20-9-2019"));
