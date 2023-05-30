function encriptar() {
    let mensaje = document.querySelector("#input").value;
    let lowerCase = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
    if (lowerCase.test(mensaje)) {
      mensaje = mensaje.replace(/e/gim, "enter");
      mensaje = mensaje.replace(/i/gim, "imes");
      mensaje = mensaje.replace(/a/gim, "ai");
      mensaje = mensaje.replace(/o/gim, "ober");
      mensaje = mensaje.replace(/u/gim, "ufat");
  
      document.querySelector("#output").innerHTML = mensaje;
      document.querySelector("#input").value = "";
  
      let btnCopiar = document.getElementById("copiar");
      btnCopiar.style.display = "block";
    } else {
      alert("Por favor, escriba solo en minúsculas y sin acentos.");
    }
  }
  var btnEncriptar = document.querySelector("#encriptar");
  btnEncriptar.addEventListener("click", encriptar);

  function desencriptar() {
    let mensaje = document.querySelector("#input").value;
    let lowerCase = /^[^ÁÍÓÚÑáéíóúA-Z]/;
    if (lowerCase.test(mensaje)) {
      mensaje = mensaje.replace(/enter/gim, "e");
      mensaje = mensaje.replace(/imes/gim, "i");
      mensaje = mensaje.replace(/ai/gim, "a");
      mensaje = mensaje.replace(/ober/gim, "o");
      mensaje = mensaje.replace(/ufat/gim, "u");
  
      document.querySelector("#output").innerHTML = mensaje;
      document.querySelector("#input").value = "";

      let copiarBtn = document.querySelector("#copiar");
      copiarBtn.style.display = "block";
    } else {
      alert("Por favor, escriba solo en minúsculas y sin acentos.");
    }
  }
  
  let btnDesencriptar = document.querySelector("#desencriptar");
  btnDesencriptar.addEventListener("click", desencriptar);

  function copiar() {
    let salida = document.querySelector("#output").innerHTML;
    navigator.clipboard.writeText(salida);
    document.querySelector("#output").textContent = "";
  }

  let btnCopiar = document.querySelector("#copiar");
  btnCopiar.addEventListener("click", copiar)