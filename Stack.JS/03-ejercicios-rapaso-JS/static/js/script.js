console.log("Conexion exitosa con js...");


// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio1() {
    let nombreCliente = prompt("Ingrese el nombre del cliente:");
    let peso = parseInt(prompt("Ingrese el peso del paquete(kg):"));
    let mensaje = "";
    let valorDespacho = 2000;

    if (peso > 0 && peso <= 2) {
        mensaje = `Paquete pesa menos de 2kgs \nvalor despacho: ${valorDespacho * peso}`;
    } else if (peso > 2 && peso <= 5) {
        mensaje = `Más de 2 kg y hasta 5 kg \nvalor despacho: ${valorDespacho * peso}`;
    } else if (peso > 5 && peso <= 10) {
        mensaje = `Más de 5 kg y hasta 10 kg \nvalor despacho: ${valorDespacho * peso}`;
    }
        else if (peso > 10 && peso <= 50) {
            mensaje = `Más de 10 kg y hasta 50 kg \nvalor despacho: ${valorDespacho * peso}`;
        }
    else {
        mensaje = `El peso ingresado es inválido.`;
    }

    alert(`Nombre del cliente: ${nombreCliente}\nCategoría del envío: ${mensaje}`);
}

// ---

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio2() {
    let Usuario = prompt("Ingrese el tipo de usuario (Estudiante/Profesor):");
    let librosCantidad = parseInt(prompt("Ingrese la cantidad de libros solicitados:"));
    let mensaje = "";
    let limiteEstudiante = 3;
    let limiteProfesor = 5;
    if (Usuario === "Estudiante" && librosCantidad <= limiteEstudiante) {
        mensaje = `Préstamo permitido para ${Usuario}.`;
    } else if (Usuario === "Profesor" && librosCantidad <= limiteProfesor) {
        mensaje = `Préstamo permitido para ${Usuario}.`;
    } else {
        mensaje = `Préstamo no permitido para ${Usuario}.`;
    }
    alert(mensaje);
}

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3() {
    let nombreParticipante = prompt("Ingrese nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));
    let categorii = "";
    if (edad >= 0 && edad <= 9) {
        categorii = "Niño";
    }
    else if (edad >= 10 && edad <= 12) {
        categorii = "Niño Mayor";
    }
    else if (edad >= 13 && edad <= 17) {
        categorii = "Adolescente";
    }
    else if (edad >= 18 && edad <= 59) {
        categorii = "Adulto";
    }
    else if (edad >= 60 && edad <= 100) {
        categorii = "Adulto Mayor";
    }
    else {
        categorii = "Edad inválida";
    }
    alert(`Nombre: ${nombreParticipante}\nEdad: ${edad}\nCategoría: ${categorii}`);
}
// ---

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.
function ejercicio4() {
    let nombreTrabajador = prompt("Ingrese nombre del trabajador:");
    let aniosServicio = parseInt(prompt("Ingrese años de servicio:"));
    let mensaje = "";
    if (aniosServicio >= 0 && aniosServicio <= 2) {
        mensaje = "Nivel de antigüedad: Bajo. No recibe bonificación.";
    } else if (aniosServicio >= 3 && aniosServicio <= 5) {
        mensaje = "Nivel de antigüedad: Medio. Recibe bonificación del 5%.";
    } else if (aniosServicio >= 6 && aniosServicio <= 10) {
        mensaje = "Nivel de antigüedad: Alto. Recibe bonificación del 10%.";
    } else if (aniosServicio > 10 && aniosServicio <= 50) {
        mensaje = "Nivel de antigüedad: Muy Alto. Recibe bonificación del 15%.";
    } else {
        mensaje = "Años de servicio inválidos.";
    }
    alert(`Nombre: ${nombreTrabajador}\n${mensaje}`);
}
// Ejercicio 5: Evaluación de Velocidad
// Enunciado
// Solicitar:

// Nombre del conductor
// Velocidad registrada
// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// Nombre del conductor
// Velocidad
// Clasificación obtenida
// Requisitos Técnicos
// Cada ejercicio debe cumplir con:

// Una función independiente.
// Uso de prompt().
// Uso de alert().
// Uso de variables.
// Uso de if.
// Uso de else if.
// Uso de else.
// Uso de operadores de comparación.
// Uso de operadores lógicos cuando corresponda.
// Desafío Extra
// Agregar una o más de las siguientes mejoras:

// Validación de campos vacíos.
// Validación de datos numéricos.
// Mostrar mensajes utilizando emojis.
// Mostrar resultados dentro del HTML utilizando innerHTML.
// Cambiar colores o estilos mediante JavaScript según el resultado obtenido.
function ejercicio5() {
    let nombreConductor = prompt("Ingrese nombre del conductor:");
    let velocidad = parseInt(prompt("Ingrese la velocidad registrada (km/h):"));
    let mensaje = "";
    if (velocidad >= 0 && velocidad <= 60) {
        mensaje = "Velocidad dentro del límite permitido.";
    } else {
        mensaje = "Velocidad excedida. Límite permitido: 60 km/h.";
    }
    alert(`Nombre: ${nombreConductor}\nVelocidad: ${velocidad} km/h\n${mensaje}`);
}