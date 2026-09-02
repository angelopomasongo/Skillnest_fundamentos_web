console.log("Conexion Exitosa con JS...");
//seleccion de titulo con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`el contenido del titulo es: ${title.textContent}`)
//seleccionar un parrrafo con la etiqueta 
// let parrafo2 = document.querySelector("p");
// console.log(parrafo);
//seleccionar dentro del nav 
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//selecciona el parrafo
let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."


//elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//tarea:
/*crear un boton y aplicar condiciones al igual que ejemplo...
Debe cambiar su texto al momento de hacerle click
Debe activarse con hover js cambiando el color de fondo
*/
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
   if(this.textContent === "Haz click en mi y cambiare"){
      this.textContent = "Ves que es distinto?"
      this.style.backgroundColor ="#ffe4a4"
      this.style.color = "#0a0a0a"
   }else{
      this.textContent = "Haz click en mi y cambiare"
      this.style.backgroundColor = "6dF421"
      this.style.color = "#f9f9f9"
   }
})
