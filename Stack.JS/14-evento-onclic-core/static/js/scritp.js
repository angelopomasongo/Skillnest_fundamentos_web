console.log("Conexion Exitosa con JS...");
document.addEventListener('DOMContentLoaded', () => {
    const btnInicioSesion = document.getElementById('btn-inicio-sesion');
    btnInicioSesion.onclick = function () {
        if (this.innerText === "Iniciar sesión") {
            this.innerText = "Cerrar sesión";
        } else {
            this.innerText = "Iniciar sesión";
        }
    };
    const btnPerfil = document.getElementById('btn-perfil');
    btnPerfil.onclick = function () {
        alert("¡Bienvenido a tu perfil de usuario!");
    };
    const botonesMeGusta = document.querySelectorAll('.boton-me-gusta');
    botonesMeGusta.forEach(boton => {
        boton.onclick = function () {
            let textoActual = this.innerText;
            let cantidadLikes = parseInt(textoActual);
            cantidadLikes += 1;
            this.innerText = cantidadLikes + " Me gusta";
        };
    });

});