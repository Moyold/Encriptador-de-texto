const ingresarTexto=document.getElementById ("ingresarTexto");

const botonEncriptar=document.getElementById("botonEncriptar");

const botonDesencriptar=document.getElementById("botonDesencriptar");

const botonCopiar=document.getElementById("botonCopiar");

const ultimoMensaje=document.getElementById("ultimoMensaje");

const mune=document.getElementById("mune");

const infodere=document.getElementById("infodere");

const derecha=document.getElementById("derecha");




/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

let cambiar =[     /* se declara el arreglo la sustitución de caracteres */
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

const formato =(nuevoValor)=> {  /* se crea esta clase para no aplicar lo mismo a encriptar/desencriptar */
    ultimoMensaje.innerHTML=nuevoValor;
    mune.classList.add("oculto");
    ingresarTexto.value="";  /* limpia el placeholder una vez ingresado el texto */
    /*mune.style.display="none"; /* retira la imagen del muñeco al haber texto */
    infodere.style.display="none";
    botonCopiar.style.display="block"; /* hace visible el botón copiar */
    derecha.classList.add("ajuste"); /* manda llamar la clase ajuste de css */
    ultimoMensaje.classList.add("ajuste");/* manda llamar la clase ajuste de css */


}

const reset=() =>{

    ultimoMensaje.innerHTML="";// despues de pulsar copiar limpia el campo 

    mune.classList.remove("oculto"); // retira el muñeco para los celulares por medio de una clase

    infodere.style.display="block";   // muestra al copiar toda la info de la parte derecha
    botonCopiar.style.display="none"; /* hace invisible el botón copiar */
    derecha.classList.remove("ajuste"); /* manda llamar la clase ajuste de css, retira el formato */
    ultimoMensaje.classList.remove("ajuste");/* manda llamar la clase ajuste de css retira el formato */
    ingresarTexto.focus(); // regresa el cursor a ingrese texto

}


botonEncriptar.addEventListener("click", () =>{
    const text=ingresarTexto.value.toLowerCase();
    if (text !=""){ 
    function encriptar(nuevoTexto){
        for( let i = 0; i<cambiar.length; i++){
            if(nuevoTexto.includes(cambiar[i][0])){
                nuevoTexto=nuevoTexto.replaceAll(cambiar[i][0],cambiar[i][1]);
            }
                
        }
        return nuevoTexto;
    }
}else {
    alert("Ingrese texto");
    reset();
}   
    /*const textoEncriptado=encriptar(text)*/
    formato(encriptar(text));
    /*ultimoMensaje.innerHTML=encriptar(text);*/
    
  
})


botonDesencriptar.addEventListener("click", ()=>{
    const text=ingresarTexto.value.toLowerCase();
    if(text !=""){
    function desencriptar(nuevoTexto){
        for(let i=0; i<cambiar.length;i++){
            if(nuevoTexto.includes(cambiar[i][1])){
                nuevoTexto=nuevoTexto.replaceAll(cambiar[i][1],cambiar[i][0]);
            }

        }
        return nuevoTexto;
    }
} else{
    alert ("Ingrese texto");
    reset();
}
    /*const textoDesencriptado=desencriptar(text);*/
    formato(desencriptar(text)); // se amnda llamdar la función formato
    /*ultimoMensaje.innerHTML=desencriptar(text); esta linea funciona en caso de no crear una funcion extra de formato*/
})

botonCopiar.addEventListener("click", ()=>{ // es un evento que se activa al hacer clic en el botón y ejecuta la funcion que se le de
    let texto=ultimoMensaje; // creas una variable y le pasas el valor que tenga último mensaje
    /*navigator.clipboard.writeText(texto.value); esta funcion también copia, pero no copia en moviles*/ 
    texto.select(); // función para seleccionar texto
    document.execCommand('copy');// función para copiar el texto
    alert("Copiado");// alerta informando que se copio el texto
    reset();
    







})










