const mensajes=[

"💚 Desarrollado por estudiantes para estudiantes.",

"🏫 Este proyecto fue creado para la Escuela Técnica N.º 5.",

"🌎 ¡Vos también podés ayudar a cuidar el ambiente!",

"💡 Separar residuos correctamente es el primer paso.",

"🤝 Invitá a un compañero a completar el desafío.",

"🌱 Pequeñas acciones generan grandes cambios.",

"💻 Informática también cuida el ambiente.",

"🥼Alimentos también cuida el ambiente.",

"🛫 también cuida el ambeinte.",

"🍎 Reducir el desperdicio de alimentos ayuda al planeta.",

"🧳 El turismo responsable protege nuestros espacios naturales."

];

function mensajeAleatorio(){

    const numero=Math.floor(Math.random()*mensajes.length);

    document.getElementById("mensajeEcoBot").innerHTML=mensajes[numero];

}

mensajeAleatorio();