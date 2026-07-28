console.log("Conexion exitosa...");

//ejemplo funcion simple (sin parametros)
function saludar(/*parametros*/) {
    alert("¡Hola, bienvenido!");
};
//saludar();//ejecucion de una funcion
//funcion con parametros
//el parametro recibe un valor para trabajar en la funicion
//el parametro recibe el tipo de dato al momento de tomar valor
function saludarParam(nombre) { //parametro nombre
    alert("¡Hola, " + nombre + "!");
};
//saludarParam("Luis"); //ejecucion de la funcion con parametros ("argumento")

//🎯 Funciones con return
function encontrarMator() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; //este valor se devuelve porque cumple la condicion 
        } else {
            return b;
        }
    }

    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2); //maximo guardara el valor de retorno 
    alert(`El número mayor entre, ${numero1} y ${numero2} el mayor es: ${maximo}`);
};

/*crear una funcion que reciba 3 parametros, a, b , c.
debe sumar a+b y el resultado restarlo por c
devolver el valor final y mostrar con un alert
*/ 
function Ejercicio(){
function sumaResta(a, b, c) {
    let suma = a + b;
    let resultado = suma - c;
    return resultado;
}
let numero1 = 5;
let numero2 = 10;
let numero3 = 3;
let resultadoFinal = sumaResta(numero1, numero2, numero3);
alert(`El resultado final de la suma y resta es: ${resultadoFinal}`);
}