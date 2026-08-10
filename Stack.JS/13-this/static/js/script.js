console.log("Prueba de conexion Js...");

// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
//guardando una referencia

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if(textoBoton === "Haz clic en mi"){
        this.innerText = "¡Texto cambiado!";
    }else{
        this.innerText = "Haz clic en mi";
    }
    
    // Cambia el texto del botón usando `this`
    //innerText = texto de la etiqueta
    
});

