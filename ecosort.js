// ==========================
// DATOS DEL JUGADOR
// ==========================

const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
    document.getElementById("jugador").textContent = usuario.nombre;
}

// ==========================
// VARIABLES
// ==========================

let puntaje = 0;
let pregunta = 0;

const residuos = [

    {
        emoji:"🥤",
        nombre:"Botella plástica",
        respuesta:"amarillo"
    },

    {
        emoji:"🍌",
        nombre:"Cáscara de banana",
        respuesta:"verde"
    },

    {
        emoji:"📦",
        nombre:"Caja de cartón",
        respuesta:"azul"
    },

    {
        emoji:"📰",
        nombre:"Diario",
        respuesta:"azul"
    },

    {
        emoji:"🍵",
        nombre:"Saquito de té",
        respuesta:"verde"
    },

    {
        emoji:"📑",
        nombre:"Cuaderno viejo",
        respuesta:"azul"
    },

];

const residuo = document.getElementById("residuo");

const nombre = residuo.querySelector("p");

const tachos = document.querySelectorAll(".tacho");

// ==========================
// CARGAR PRIMER RESIDUO
// ==========================

cargarResiduo();

// ==========================

function cargarResiduo(){

    residuo.innerHTML = `
        <div style="font-size:90px">
            ${residuos[pregunta].emoji}
        </div>

        <p>${residuos[pregunta].nombre}</p>
    `;

    document.getElementById("progreso").textContent =
    `Residuo ${pregunta+1} de ${residuos.length}`;

    document.getElementById("barra").style.width =
    ((pregunta+1)/residuos.length)*100 + "%";

}

// ==========================
// EMPEZAR A ARRASTRAR
// ==========================

residuo.addEventListener("dragstart",function(e){

    e.dataTransfer.setData("respuesta",residuos[pregunta].respuesta);

});

tachos.forEach(function(tacho){

    tacho.addEventListener("dragover",function(e){

        e.preventDefault();

    });

    tacho.addEventListener("drop",function(e){

        e.preventDefault();

        const correcta = e.dataTransfer.getData("respuesta");

        const elegida = this.dataset.tacho;

        if(correcta === elegida){

    puntaje += 10;

    document.getElementById("puntaje").textContent = puntaje;
            
        }else{
            document.body.classList.add("shake");

            setTimeout(() => {

    document.body.classList.remove("shake");

},500);
        
const cuerpo = this.querySelector(".cuerpo");

cuerpo.classList.add("error");

setTimeout(() => {

    cuerpo.classList.remove("error");

},700);

}



pregunta++;

if(pregunta < residuos.length){

    cargarResiduo();

}else{

    finalizarJuego();

}

    });

});

function finalizarJuego(){

    residuo.innerHTML = `
        <div style="font-size:80px;">🏆</div>
        <p>¡Juego terminado!</p>
    `;

}