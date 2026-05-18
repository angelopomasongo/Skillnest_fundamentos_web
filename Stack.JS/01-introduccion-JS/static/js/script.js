console.log("Conexion exitosa con js...")
function cambiarTexto() {
  let titulo = "Hola, bienvenido";
  if (document.getElementById("titulo").innerText == titulo){
      document.getElementById("titulo").innerText = "Has cambiado el texto con JS";
  } else {
    document.getElementById("titulo").innerText = titulo;
  }
}
