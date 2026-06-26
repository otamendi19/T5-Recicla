const formulario = document.getElementById("registro");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = {

        nombre: document.getElementById("nombre").value,

        email: document.getElementById("email").value,

        curso: document.getElementById("curso").value,

        modalidad: document.getElementById("modalidad").value

    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    window.location.href= "juego.html";

    // En el futuro cambiarás esta línea para ir al juego.
    // window.location.href = "juego.html";

});