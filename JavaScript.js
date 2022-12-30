const inputTexto = document.querySelector(".mytext")
        
function ocultar () {
    let x = document.querySelector(".mensaje_lista").style.visibility = "hidden";
    let imprimir = document.querySelector(".salida_texto").style.top = "250px";
}
function encriptador () {
    var texto = inputTexto.value;

    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    let imprimir = document.querySelector(".salida_texto").value = texto;
    
    ocultar();
}

function desencriptador (){
    var texto = inputTexto.value;

    texto = texto.replaceAll("enter","e");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ufat","u");
    let imprimir = document.querySelector(".salida_texto").value = texto;
    ocultar();
}

function copy() {
    let copyText = document.querySelector(".salida_texto");
    copyText.select();
    return document.execCommand("copy");
  }