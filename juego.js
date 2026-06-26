console.log("juego.js cargado");
const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

    document.getElementById("bienvenida").innerHTML =
    "¡Bienvenido/a, <strong>" + usuario.nombre + "</strong>!";

}

function abrirJuego(juego){

    if(juego == "ecosort"){

        window.location.href = "ecosort.html";

    }

    else if(juego == "ecoquiz"){

        window.location.href = "ecoquiz.html";

    }

    else if(juego == "ecodetective"){

        window.location.href = "ecodetective.html";

    }

}