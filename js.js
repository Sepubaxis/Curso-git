const frase = [
    "Seguramente",
    "No, no lo creo",
    "Es imposible",
    "Sin duda alguna",
    "Seria mejor no decirte",
    "Mejor preguntame después",
    "Si",
    "No",
    "Pensalo mejor...",
    "Seria ideal",
    "Muy dudosamente",
    "Puede ser",
    "Meh...",
    "Hay muchas chances",
    "Hay pocas chances",
    "Quien te dice",
    "No creo",
    "Definitivamente SI",
    "SIII",
    "NO",
    "Jugatelá",
    "Olvidate"
];

document.getElementById("respuesta").innerHTML=frases;

function responder(){
    frase.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("respuesta").innerHTML=frase[0];
    document.getElementById("respuesta").style.fontSize="18px";
}

$(document).ready(function() {
    $('#askme').click(function() {
        $('#clear').val('');
    });
});