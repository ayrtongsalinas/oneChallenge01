function encriptar() {
  let mensaje = document.getElementById("input").value;
  let lowerCase = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
  if (lowerCase.test(mensaje)) {
    mensaje = mensaje.replace(/e/gim, "enter");
    mensaje = mensaje.replace(/i/gim, "imes");
    mensaje = mensaje.replace(/a/gim, "ai");
    mensaje = mensaje.replace(/o/gim, "ober");
    mensaje = mensaje.replace(/u/gim, "ufat");

    document.getElementById("output").innerHTML = mensaje;
    document.getElementById("input").value = "";

    let displayObjetos = document.getElementById("objetosOutput");
    displayObjetos.style.display = "none";

    let copiarBoton = document.getElementById("copiar");
    copiarBoton.style.display = "block";
  } else {
    alert("Por favor, escriba solo en minúsculas y sin acentos.");
  }
}
var encriptarBtn = document.getElementById("encriptar");
encriptarBtn.addEventListener("click", encriptar);

function desencriptar() {
  let mensaje = document.getElementById("input").value;
  let lowerCase = /^[^ÁÍÓÚÑáéíóúA-Z]/;
  if (lowerCase.test(mensaje)) {
    mensaje = mensaje.replace(/enter/gim, "e");
    mensaje = mensaje.replace(/imes/gim, "i");
    mensaje = mensaje.replace(/ai/gim, "a");
    mensaje = mensaje.replace(/ober/gim, "o");
    mensaje = mensaje.replace(/ufat/gim, "u");

    document.getElementById("output").innerHTML = mensaje;
    document.getElementById("input").value = "";

    let displayObjetos = document.getElementById("objetosOutput");
    displayObjetos.style.display = "none";

    let copiarBtn = document.getElementById("copiar");
    copiarBtn.style.display = "block";
  } else {
    alert("Por favor, escriba solo en minúsculas y sin acentos.");
  }
}

let desencriptarBtn = document.getElementById("desencriptar");
desencriptarBtn.addEventListener("click", desencriptar);

//COMPLETA LA DESENCRIPTACION EN EL BOTON

function copiar() {
  let copiarOutput = document.getElementById("output").innerText;
  navigator.clipboard.writeText(copiarOutput);
  document.getElementById("output").textContent = "";
}

let copiarBtn = document.getElementById("copiar");
copiarBtn.addEventListener("click", copiar);
