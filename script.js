var input = document.getElementById("textarea");
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".muneco");
var tituloMuneco = document.querySelector(".titulo-muneco");
var parrafoMuneco = document.querySelector(".parrafo-muneco");
var copiar = document.querySelector(".copiar");

var letraA = "ai";
var letraE = "enter";
var letraI = "imes";
var letraO = "ober";
var letraU = "ufat";


var encriptar = function(){
    var validar = input.value.replace(/[A-ZÁÉÍÓÚáéíóú]/g,"false");
    var retorno = /false/g.test(validar);

    if(input.value == "" || true == retorno){
        tituloMuneco.textContent = "Ningun mensaje fue encontrado";
        tituloMuneco.className = "titulo-muneco";
        parrafoMuneco.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        muneco.style.display = "inherit";
        copiar.style.display = "none";
        input.focus();
    } else{
        var textoEncriptado = input.value;

        textoEncriptado = textoEncriptado.replace(/e/g, letraE);
        textoEncriptado = textoEncriptado.replace(/i/g, letraI);
        textoEncriptado = textoEncriptado.replace(/a/g, letraA);
        textoEncriptado = textoEncriptado.replace(/o/g, letraO);
        textoEncriptado = textoEncriptado.replace(/u/g, letraU);

        tituloMuneco.textContent = textoEncriptado;
        tituloMuneco.className = "mensaje-encriptado-desencriptado";
        parrafoMuneco.textContent = "";

        muneco.style.display = "none";
        copiar.style.display = "inherit";

        input.value = "";
        input.focus();
    }
}


var desencriptar = function(){
    var validar = input.value.replace(/[A-ZÁÉÍÓÚáéíóú]/g,"false");
    var retorno = /false/g.test(validar);

    if(input.value == "" || true == retorno){
        tituloMuneco.textContent = "Ningun mensaje fue encontrado";
        tituloMuneco.className = "titulo-muneco";
        parrafoMuneco.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        muneco.style.display = "inherit";
        copiar.style.display = "none";
        input.focus();
    } else{
        var textoDesencriptado = input.value;

        textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
        textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
        textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
        textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
        textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

        tituloMuneco.textContent = textoDesencriptado;
        tituloMuneco.className = "mensaje-encriptado-desencriptado";
        parrafoMuneco.textContent = "";

        muneco.style.display = "none";
        copiar.style.display = "inherit";

        input.value = "";
        input.focus();
    }
}


var funCopiar = function(){
    navigator.clipboard.writeText(tituloMuneco.innerText);
}


botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
copiar.addEventListener("click", funCopiar);