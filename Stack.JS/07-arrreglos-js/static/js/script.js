console.log("Conexion exitosa...");
//varible a lista

// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "María";
// let nombre4 = "Carlos";
// //transformar en array y mostrar
// let nombres = ["Ana", "Pedro", "Maria", "Carlos"]
// //mostrar a maria en alerta
// console.log(nombres[2]);
// let compras = [5000, 2300, 12000, 4500, 3000]
// let alumnos = ["Ana", "Pedro", "Maria", "Carlos",]
// let datos = ["Carlos", 18, true]
// let frutas = ["Manzana", "pera", "kiwi", "sandia",]

// //desafio formar una oracion con elementos
// //de las distintas variables
// //pedro tiene 18 años y compro una sandia que le costo 2300 pesos
// let oracion = `${alumnos[1]} tiene ${datos[1]}años y compro una ${frutas[3]} que le costo ${compras[1]} pesos`;
// console.log(oracion)

// //la propiedad .length nos permite conocer la cantidad de elementos
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
// console.log(frutas.length);
// //obtener el ultimo elemento
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
// let ultima = frutas[arreglo.length - 1]
// //variable .length -1 siempre trae el ultimo elemento
// console.log(frutas.length);

// //desafio 
// //del arreglo ["hola", "a", "todos", "los", "programadores"]
// //mostrar el penultimo elemento y el ultimo concatenado
// let mensaje = ["Hola", "a", "todos", "los", "programadores",]
// let oracion = mensaje[mensaje.length - 2] + " " + mensaje[mensaje.length - 1];
// console.log(oracion);


// let listaTareas = ["Barrer", "Cocinar", "Realizar compras"]
// function manipularArreglo() {
//     //Modificar un elemento del arreglo
//     listaTareas[1] = "Construir";
//     //Añadir un elemento al final de la lista
//     listaTareas.push("Cocinar");//Agrega un elemento al final
//     //Eliminar el ultimo elemento y mostrarlo
//     let eliminado = listaTareas.pop();
//     //Añadir un elemento al principio de la lista 
//     listaTareas.unshift("Boxear");
//     //Eliminar el primer elemento de la lista
//     eliminado += " " + listaTareas.shift();
//     //Mostrar resultado
//     alert(listaTareas.join(" - "))
//     alert("Elementos eliminados: " + eliminado)
// }

//recorrer un arreglo
function recorrer(){
    let notas = [6.2, 5.8, 4.1, 7.0];
    for (let i = 0; i < notas.length; i++) {
        alert(notas[i]);
    }
}




//sumar elementos dentro de un bucle
function sumarElementos(){
let ventas = [10000,5000,12000,8000];

let total = 0;

for(let i=0;i<ventas.length;i++){

    total += ventas[i];

}

alert(total);
}

//calcular un promedio
function calcularPromedio(){
let notas = [5.8,6.2,4.9,6.5];
let suma = 0;
for(let i=0;i<notas.length;i++){
    suma += notas[i];
}
let promedio = suma / notas.length;
alert(promedio);
}


//condiciones
function condiciones(){
let edades = [12,15,18,20,25];
let mayores = []
for(let i=0;i<edades.length;i++){

    if(edades[i] >= 18){

        console.log(edades[i]);

    }

}
}