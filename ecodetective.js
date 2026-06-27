const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

document.getElementById("jugador").innerHTML =
"Jugador: <strong>"+usuario.nombre+"</strong>";

}

let encontrados=0;

let puntaje=0;

const total=3;

function encontrar(objeto,mensaje){

if(objeto.classList.contains("encontrado")){

return;

}

objeto.classList.add("encontrado");

encontrados++;

puntaje+=10;

document.getElementById("contador").textContent=
encontrados+" / "+total;

document.getElementById("puntaje").textContent=
puntaje;

document.getElementById("mensaje").innerHTML=
mensaje;

if(encontrados==total){

setTimeout(()=>{

document.getElementById("mensaje").innerHTML=
"🏆 ¡Excelente! Encontraste todos los problemas ambientales.";

},1500);

}

}