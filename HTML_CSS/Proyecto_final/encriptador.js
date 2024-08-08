
const valorTA = document.querySelector(".main__seccion__uno__textarea__captura");
const mensajeTextarea = document.querySelector(".main__seccion__dos__contenedor__textArea");
const textoCopiado = document.querySelector(".main__seccion__dos__contenedor__textArea");
let respaldo = '';

    function encriptador(cadena){
        let textoEncriptable = Array.from(cadena);
        let textoEncriptado = '';
        for(let i = 0; i < textoEncriptable.length; i++){
            switch(textoEncriptable[i]){
            case 'a' : 
            textoEncriptado = textoEncriptado + textoEncriptable[i] + 'i';
            break;
            
            case 'e' :
            textoEncriptado = textoEncriptado + textoEncriptable[i] + 'nter';
            break;
            case 'i' :
            textoEncriptado = textoEncriptado + textoEncriptable[i] + 'mes';
            break;
            
            case 'o' :
            textoEncriptado = textoEncriptado + textoEncriptable[i] + 'ber';
            break;
            
            case 'u' :
            textoEncriptado = textoEncriptado + textoEncriptable[i] + 'fat';
            break;
            
            default :
            textoEncriptado = textoEncriptado + textoEncriptable[i];
            break;
            } //switch 
        
        }//for
        console.log(textoEncriptado);
        return textoEncriptado;
        }
        


function eventEncriptar(){
    respaldo = valorTA.value;
    const textoEncriptado = encriptador(valorTA.value);
    mensajeTextarea.value = textoEncriptado;
    valorTA.value = "";
    mensajeTextarea.style.backgroundImage = "none";
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('copiar').style.display = 'block'
}

function copyTexto(){    
    valorTA.value = textoCopiado.value;
}

function eventDesencriptar(){
    mensajeTextarea.value = respaldo;
    valorTA.value = "";
}

function limpiaPantalla(){
    mensajeTextarea.value = "";
    valorTA.value = "";
}



limpiaPantalla();
