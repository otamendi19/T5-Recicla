const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

    document.getElementById("jugador").textContent =
    "Jugador: " + usuario.nombre;

}

let puntaje = 0;

let actual = 0;

const preguntas = [

{
pregunta:"¿En qué contenedor debe colocarse una botella plástica?",
opciones:[

{texto:"Orgánico", correcta:false},

{texto:"Papel", correcta:false},

{texto:"Plásticos", correcta:true},

{texto:"No reciclables", correcta:false}

],

explicacion:"Las botellas plásticas se reciclan junto con los demás envases de plástico."
},

{
pregunta:"¿Qué acción ayuda a reducir el desperdicio de alimentos?",
opciones:[
{texto: "Servirse solo lo necesario", correcta:true},
{texto: "Tirar comida en buen estado", correcta:false},
{texto: "Comprar de más", correcta:false},
{texto: "Dejar restos en el plato", correcta:false}
],
explicacion:"Servirse únicamente lo que se va a consumir ayuda a evitar el desperdicio."
},

{
pregunta:"¿Qué práctica favorece un turismo sustentable?",
opciones:[
{texto: "Respetar senderos y espacios naturales",correcta:true},
{texto: "Dejar basura en la playa", correcta:false},
{texto: "Extraer plantas", correcta:false},
{texto: "Hacer fogatas donde está prohibido", correcta:false}
],
explicacion:"Respetar la naturaleza ayuda a conservar los espacios turísticos."
} 

];

mezclar(preguntas[actual].opciones);

cargarPregunta();

function mezclar(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

function cargarPregunta(){

    // Oculta la explicación
    document.getElementById("explicacion").style.display = "none";

    // Pregunta
    document.getElementById("textoPregunta").textContent =
    preguntas[actual].pregunta;

    // Opciones
    const botones = document.querySelectorAll(".opcion");

    botones.forEach((boton, indice)=>{

        boton.textContent = preguntas[actual].opciones[indice].texto;

        boton.disabled = false;

        boton.classList.remove("correcta");
        boton.classList.remove("incorrecta");

    });

    // Progreso

    document.getElementById("progreso").textContent =
    `Pregunta ${actual+1} de ${preguntas.length}`;

    document.getElementById("barra").style.width =
    ((actual+1)/preguntas.length)*100 + "%";

}


function responder(opcion){

    const botones = document.querySelectorAll(".opcion");

    botones.forEach(b=>b.disabled=true);

    const correcta = preguntas[actual].opciones.findIndex(op => op.correcta);

    if(preguntas[actual].opciones[opcion].correcta){
         puntaje += 10;

    document.getElementById("puntaje").textContent = puntaje;
    }
    
        

    else{

        botones[opcion].classList.add("incorrecta");

        botones[correcta].classList.add("correcta");
        

    }

    document.getElementById("explicacion").style.display="block";

    document.getElementById("explicacion").innerHTML=

    "<strong>Explicación:</strong><br><br>"+

    preguntas[actual].explicacion;

    setTimeout(()=>{

        actual++;

        if(actual<preguntas.length){

            cargarPregunta();

        }

        else{

            finalizarJuego();

        }

    },2500);

}

function finalizarJuego(){

    document.querySelector(".pregunta").innerHTML=`

        <h1>🏆 ¡Juego terminado!</h1>

        <br>

        <h2>Tu puntaje fue</h2>

        <h1>${puntaje}</h1>

        <br>

        <button onclick="location.reload()">

            Volver a jugar

        </button>

    `;

    document.querySelector(".respuestas").style.display="none";

    document.getElementById("explicacion").style.display="none";

}

