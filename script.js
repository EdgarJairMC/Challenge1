const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var buttonEncriptar = document.querySelector('.bencriptar');
var buttonDesencriptar = document.querySelector('.bdesencriptar');
var textoCodificado="", textoDecodificado="";
var codificado= {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
};
function btnEncriptar(){
    const textoEncriptado = codificar(textArea.value)
    mensaje.value="";
    textArea.value="";
    mensaje.value=textoEncriptado
    mensaje.style.backgroundImage = "none"
    buttonEncriptar.classList.add('clicked');
    buttonEncriptar.innerHTML = 'Encriptado';
    setTimeout(function() {
        buttonEncriptar.classList.remove('clicked');
        buttonEncriptar.innerHTML = 'Encriptar';
    }, 1000);
    
}
function btnDesencriptar(){
    const textoDesencriptado = decodificar(textArea.value)
    mensaje.value="";
    textArea.value="";
    mensaje.value=textoDesencriptado
    mensaje.style.backgroundImage = "none"
    buttonDesencriptar.classList.add('clicked');
    buttonDesencriptar.innerHTML = 'Desencriptado';
    setTimeout(function() {
        buttonDesencriptar.classList.remove('clicked');
        buttonDesencriptar.innerHTML = 'Desencriptar';
    }, 1000);
}
function codificar(texto) {
    return texto.split('').map(caracter => codificado[caracter] || caracter).join('');
}
function decodificar(texto){
    let caracter="", contador=0;
    let textoDecodificado="";
    while (contador<texto.length){
        let cambio=false
        for (vocal in codificado){
            let cursor=contador+codificado[vocal].length;                                             
            if(texto.slice(contador,cursor)==codificado[vocal]){
                cambio=true
                break;
            }
        }
        if(cambio){
            textoDecodificado+=vocal;
            contador+=codificado[vocal].length         
        }else{
            textoDecodificado+=texto[contador];
            contador++      
        }
        
    } return textoDecodificado;
}
function limitarMinusculas(elemento) {
    const regex = /[^a-z]/g;
    elemento.value = elemento.value.toLowerCase().replace(regex, '');
}
function copiarTexto() {
    const texto = mensaje.value;
    navigator.clipboard.writeText(texto)
}
