console.log("Conexion exitosa...");

document.getElementById("colorButton").addEventListener("click", cambiarColor);
document.getElementById("colorButton").addEventListener("click", cambiarColor);
document.getElementById("colorButton").addEventListener("click", cambiarColor);

function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}