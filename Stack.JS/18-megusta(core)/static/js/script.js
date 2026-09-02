console.log("Conexion Exitosa con JS...");

let publicaciones = document.querySelectorAll('.publicacion');

publicaciones.forEach(publicacion => {
   let boton = publicacion.querySelector('.boton-me-gusta');
   let contador = publicacion.querySelector('.contador-me-gusta');
   let likes = 0;

   boton.addEventListener('click', () => {
      likes++;
      contador.textContent = `${likes} like(s)`;
   });
});