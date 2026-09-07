console.log("Conexion exitosa con JS...");

var contador = 0;

// Cambiar la imagen al pasar el ratón
function cambiarImagen() {
    document.getElementById("imagen-principal").src = "static/images/comida-mexicana2.jpg";
}

function imagenOriginal() {
    document.getElementById("imagen-principal").src = "static/images/comida-mexicana.jpg";
}

// Alerta con el correo
function mostrarCorreo() {
    var texto = document.getElementById("correo").value;
    alert("Correo ingresado: " + texto);
}

// Sumar al carrito
function sumarCarrito() {
    contador = contador + 1;
    document.getElementById("num-carrito").innerHTML = contador;
}