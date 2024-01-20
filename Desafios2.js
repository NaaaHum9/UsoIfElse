/**
 * 1 - Preguntar al usuario el dia de la semana y si es sabado o domingo
 * mostrar buen fin de semana, de lo contrarrio decir buena semana
 */

alert('Dia de la semana');

//Variables, se decalra los dias para despues usarlos en el if
let diaSemana = "Sabado";
let diaSemana2 = "Domingo";

//Ingresa el dia de la semana
let diaUsuario = prompt("Ingrese el dia de la semana: ");

//varifica si el dia es sabado o domingo buestar buen fin y si no buena semana
if (diaUsuario == diaSemana || diaUsuario == diaSemana2){
    alert("Buen fin de semana!");
}else{
    alert("Buena semana!");
}

/**
 * 2 - Verifica si un número ingresado por el usuario es positivo o negativo. 
 * Muestra una alerta informativa.
 */

alert('Numeros positivos o negativos');

let numero = prompt("Ingrese un numero: ");

if (numero < 0) {
    alert('El numero es negativo ' + numero);
}else{
    alert('Numero positivo ' + numero);
}

/**
 * 3 - Crea un sistema de puntuación para un juego. 
 * Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
 * En caso contrario, muestra "Intenta nuevamente para ganar.".
 */

alert('Sistema de puntuacion');

let puntuacionUsuario = prompt("Ingrese su puntuacion");

if (puntuacionUsuario >= 100) {
    alert('Felicidades, has ganado!');
} else{
    if (puntuacionUsuario < 100) {
        alert('Intenta nuevamente ganar');
    }
}

/**
 * 4 - Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
 *  utilizando un template string para incluir el valor del saldo.
 */

alert('Mensaje que informa');

let saldoUsuario = prompt("Ingrese su saldo");

alert(`Su saldo actual es: ${saldoUsuario}`);

/**
 * 5 - Pide al usuario que ingrese su nombre mediante un prompt. 
 * Luego, muestra una alerta de bienvenida usando ese nombre.
 */

alert('Nombre del usuario');

let nombreUsuario = prompt("Ingrese su nombre");

alert('Bienvenido ' + nombreUsuario);