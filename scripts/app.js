
//FUNCIONES QUE UTILIZO PARA LA SUMA, RESTA y IVA

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

//INICIACION DE LAS VARIABLES REFEREIDAS A LOS LIBROS

let elPrincipito = 1200;
let perroSiberiano = 2200;
let laOdisea = 3500;


//FUNCION QUE LEE EL LIBRO Y TE DEVUELVE EL PRECIO + IVA
function escogerLibro(libro) {
  alert("Bienvenido a la tienda de libros!!!");
  //VARIABLE SALIDA PARA PODER SALIR DEL CICLO
  let salida = "";
  let precioFinal = 0;
  while (salida != "ESC") {
    libro = parseInt(prompt("Escoge un libro escribiendo el numero de referencia: \n 1) El principito $" +elPrincipito+"  \n 2) El perro siberiano $"+perroSiberiano+" \n 3) La odisea $"+laOdisea));
    //CONDICIONAL PARA SABER QUE LIBRO ELIJE EL USUARIO
    if(libro==1){
      precioFinal += suma(elPrincipito, iva(elPrincipito));
    }
    else if(libro==2){
      precioFinal += suma(perroSiberiano, iva(perroSiberiano));
    }
    else if(libro==3){
      precioFinal += suma(laOdisea, iva(laOdisea));
    }
    else{
      alert("Porfavor ingrese un numero que corresponda al libro a comprar, muchas gracias!!!");
    }
    salida = prompt("Si quieres seguir comprando solo da enter, de lo contrario escrbibe ESC")
  }
  alert("El total a pagar + IVA es: $" + precioFinal);
}


// INVOCACION DE LA FUNCION DE ARRIBA
escogerLibro();
