console.log("Conexion Exitosa con JS...");
const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function () {
   console.log("El ratón está sobre la imagen");

   imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4HEtyRe7-aJ6fgIQtOzyVwB9t-XAfEHgiCKh4NdceA&s=10";
});

imagen.addEventListener("mouseout", function () {
   console.log("El ratón ha salido de la imagen");

   imagen.src = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/2383011/main-image";
});