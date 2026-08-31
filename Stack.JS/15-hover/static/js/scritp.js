console.log("Conexion Exitosa con JS...");
const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";

});

//tarea
/*
Crear dos botones con  evento onmouserover y onmouseout
-cambia el texto de un boton */

const btn = document.getElementById("cambiodetexto");

btn.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   btn.style.backgroundColor = "blue";
   btn.textContent = "Haz cambiado el texto!"
});

btn.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   btn.style.backgroundColor = "red";
   btn.textContent = "Pasa el cursor sobre mi"
});
/*-cambia el color de fondo y color de texto del segundo boton

*/
const colortexto = document.getElementById("miBoton");

colortexto.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";

});