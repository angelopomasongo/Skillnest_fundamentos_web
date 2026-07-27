console.log("Conexion exitosa...");
function hamburguesas(){
let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }

};
}
//acceder al pan
console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes();
//automovil
function automoviles(){
let auto = {
    Marca:"Honda Civic",
    Modelo:"Corolla",
    Motor:"Spoon Engine",
    Turbo:"T66 Turbo",
    OxidoNitroso:"NOS",
    Escape:"Motec system exhaust",
    extra: [
        "Wings West",
        "Aleron aluminio estilo R33 GT-R",
        "llantas Axis Se7ven de 17 o 18 pulgadas",
        "",
    ],

    piezasdeauto:function(){
        alert(`Auto: ${this.Auto}
        Modelo: ${this.Modelo}
        Motor: ${this.Motor}
        Turbo: ${this.Turbo}
        Oxído de Nitroso: ${this.OxidoNitroso}
        Escape: ${this.Escape}
        Extras: ${this.extras.join(" - ")}`)
    }
};
}
auto.piezasdeauto; //Fuera de la funcion lo llamamos método
//casa
function mostrarInformacionCasa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
    mostrarInformacion:function(){
            alert(`direccion: ${this.direccion}`)
            alert(`habitaciones: ${this.habitaciones}`)
            alert(`baños: ${this.baños}`);
        }
    };
    casa.mostrarInformacion();
}