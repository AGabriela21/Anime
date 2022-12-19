const Anime =[
    {
        pregunta:"¿Quien hizo el primer cortometraje de anime?",
        descripcion: "El manga y el anime son dos de los grandes. Aunque ambas expresiones artísticas cuentan con una estética muy similar, lo cierto es que se diferencian claramente por sus formatos. Uno ligado al papel y el otro más al campo audiovisual. ",
        opciones: ["Akira Toriyama", "Takahiro", " Junichi Kouchi", "Naoko Takeuchi"],
        respuesta: 2
    },
    {
        pregunta:"¿Cual fue el anime mas visto en el mundo?",
        descripcion:"En la historia del anime durante la década de 1970, se popularizó el consumo de manga, lo que dió pie al crecimiento exponencial del anime",
        opciones:["Shingeki no kyojin", "Akamega Kill", "Dororo", "Naruto"],
        respuesta: 3
    },
    {
        pregunta:"¿Cuál es el primer manga de la historia?",
        descripcion:"El manga puede referirse a todo tipo de dibujos animados, cómics y animación, ya que se compone de dos kanji: hombre, que significa caprichoso o improvisado y ga que significa imágenes",
        opciones:["Blood Moon", "Tagosaku to Mokube no Tokyo Kenbutsu","Okaasan","Black Clover"],
        respuesta: 1
    },
    {
        pregunta:"¿De donde se orgina el anime?",
        descripcion: "El anime tradicionalmente es dibujado a mano y al principio los procesos realizados de forma digital eran muy específicos retoque y montaje. Sin embargo, en la actualidad las tareas más comunes dentro de la producción de una animación, como podría ser el coloreado o los efectos visuales (brillos, sombras, luz ambiental, etc.",
        opciones:["Japon","Brasil", "Rusia", "China", "Mexico"],
        respuesta: 0
    },
    {
        pregunta:"¿Quien fue el creador de Dragon Ball?",
        descripcion:"Su trama describe las aventuras de Gokū, un guerrero saiyajin, experto en artes marciales que en su infancia inicia sus viajes y aventuras en las que pone a prueba y mejora sus habilidades de pelea, enfrentando oponentes y protegiendo a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad",
        opciones:["Masashi Kishimoto","	Akiyoshi Hongo", "Akira Toriyama", "Rumiko Takahashi"],
        respuesta: 2
    },
    {
        pregunta:"¿Cual es el anime con mas episodios?",
        descripcion:" La industria del anime ha crecido considerablemente en Latinoamérica y Estados Unidos en los últimos años.",
        opciones:["Sazae-san", "One piece", "Naruto", "Shingeki no Kyojin", "Hunter X Hunter"],
        respuesta: 0
    },
    {
        pregunta:"¿Cuál es el anime más triste del mundo?",
        descripcion:"Estilo de dibujo animado, caracterizado por personajes humanos con ojos grandes y rostro infantil o estilizado",
        opciones:["Shiki Oriori", "Amor de gata", "Your Name", "Shigatsu wa kimi no uso"],
        respuesta:3
    },
    {
        pregunta:"¿Cómo se llama el anime más terrorifico?",
        descripcion:"Gore. Esta temática se encuentra llena de violencia extrema, torturas, muertes, mucha sangre y hasta desmembramientos. Este es uno de los géneros del anime de los más escandalosos y ha sido prohibido en muchos países",
        opciones:["Another", "Jujutsu Kaisen", "Spy x Family", "Umineko No Naku Koro Ni"],
        respuesta:0
    },
    {
        pregunta:"¿Cual es el anime mas visto en 2022?",
        descripcion:"El anime es un medio de gran expansión, siendo al mismo tiempo un producto de entretenimiento comercial lo que ha ocasionado un fenómeno cultural en masas populares y una forma de arte tecnológico.",    
        opciones:["One Piece","Chainsaw Man","Spy Family","Demon Slayer","Naruto"],
        respuesta:3
    },
    {
        pregunta:"¿Cual es el villano de Naruto?",
        descripcion:"La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas, y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
        opciones:["Obito Uchiha", "Sakura","Kakashi", "Kaguya"],
        respuesta:3
    },
      

]

//VARIABLES

const pregunta = document.querySelector("#subGrupo__pregunta");
const descripcion = document.querySelector("#subGrupo__descripcion");
const cajaOpciones = document.querySelector(".subGrupo__opciones");
const respuesta = document.querySelector("#grupo__elemento");
const barraProgreso = document.querySelector("#barraProgreso");

var indice = 0;


  window.onload = iniciarAplicacion(); 
 
  
  function iniciarAplicacion(){
      console.log("Aplicacion iniciada");
      cargarPreguntaDescripcion();
      cargarOpciones();
  }

  function cargarPreguntaDescripcion(){
    
       if(indice< Anime.length){
        pregunta.textContent = Anime[indice].pregunta;
        descripcion.textContent = Anime[indice].descripcion;
       }else{
          paginaRespuesta();
       }
     
  }

  function cargarOpciones(){
    
    if (indice < Anime.length){
        for (let i = 0; i < Anime[indice].opciones.length; i++) {           
            const boton = document.createElement("BUTTON"); 
            boton.textContent = Anime[indice].opciones[i];
            boton.setAttribute("onclick",`verificarRespuesta(${i},${Anime[indice].respuesta}); siguientePregunta()`);
            boton.classList.add("subGrupo__opcion");
            cajaOpciones.appendChild(boton);  
      }
      return;
    }
     
 }

let puntaje = 0;

function verificarRespuesta(opcion,correcta){
   
       if(opcion == correcta){
           puntaje = puntaje + 5;
       }else{
            // alert("NO SABES DE ANIME!!!");
            puntaje = puntaje;
       }
       

}

function siguientePregunta(){
      indice = indice + 1; //indice++;
     
     
     barraProgreso.value = barraProgreso.value + 10;
      limpiarHTML();
      cargarPreguntaDescripcion();
      cargarOpciones();
}


function limpiarHTML(){
      while(cajaOpciones.firstChild){
          cajaOpciones.removeChild(cajaOpciones.firstChild);
      }
}

function paginaRespuesta(){
       respuesta.innerHTML = `
       
       <img id ="imagenrespuesta" src="https://cdnb.20m.es/videojuegos/files/2011/04/narutoshippuden.jpg" alt="" />
       Tu puntaje es: ${puntaje}`;
}

