console.log("Conexion exitosa con JS...");

const btnLogin = document.getElementById('btn-login');

btnLogin.onclick = function () {
    if (btnLogin.innerText === 'Iniciar sesión') {
        btnLogin.innerText = 'Cerrar sesión';
    } else {
        btnLogin.innerText = 'Iniciar sesión';
    }
};


const btnProfile = document.getElementById('btn-profile');

btnProfile.onclick = function () {
    alert("Redirigiendo a tu perfil...");
};


const likeButtons = document.querySelectorAll('.btn-like');

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].onclick = function () {
        let currentLikes = parseInt(this.innerText);
        currentLikes += 1;
        this.innerText = currentLikes + " Me gusta";
    };
}