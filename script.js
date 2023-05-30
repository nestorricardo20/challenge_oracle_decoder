var textArea = document.querySelector(".text-area");
var mensaje = document.querySelector(".mensaje");
var copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    //if(textoEscrito!==undefined|| textoEscrito!==null|| textoEscrito!==''){
        //if(isNaN(textoEscrito)){
        console.log(textoEscrito);
       // console.log(!preg_match('/[0-9]{1,}/', 'as%##@1'));
        let validador = textoEscrito.match(/^[a-z ]*$/); //^\s*

        if(!validador || validador === 0) {
            alert("Solo son permitidas letras minúsculas y sin acentos")
            location.reload();
            return true;
        }
    //}
    
}


function btnEncriptar(){
    if(!validarTexto()) {
        let textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
        mensaje.style.display = "block";
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    if(!validarTexto()) {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        copia.style.display = "block"
        mensaje.style.display = "block";
    }
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
   
    copia.style.display = "none";
    mensaje.style.display = "none";
}


