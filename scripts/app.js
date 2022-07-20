
//FUNCIONES QUE UTILIZO PARA LA SUMA Y RESTA

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

//INICIACION DE LAS VARIABLES REFEREIDAS A LOS LIBROS Y SU PRECIO FINAL

let elPrincipito = 1200;
let perroSiberiano = 2200;
let laOdisea = 3500;
let precioFinal = 0;
const iva = x => x * 0.21;


//FUNCION QUE LEE EL LIBRO Y TE DEVUELVE EL PRECIO + IVA
function escogerLibro(libro) {
  alert("Bienvenido a la tienda de libros!!!");
  let salida = "";
  while (salida != "ESC") {
    libro = parseInt(prompt("Escoge un libro escribiendo el numero de referencia: \n 1) El principito $" +elPrincipito+"  \n 2) El perro siberiano $"+perroSiberiano+" \n 3) La odisea $"+laOdisea));
    switch (libro) {
      case 1:
        precioFinal += suma(elPrincipito, iva(elPrincipito));
        break;
      case 2:
        precioFinal += suma(perroSiberiano, iva(perroSiberiano));
        break;
      case 3:
        precioFinal += suma(laOdisea, iva(laOdisea));
        break;
      default:
        alert("Porfavor ingrese un numero que corresponda al libro a comprar, muchas gracias!!!");
    }
    salida = prompt("Si quieres seguir comprando solo da enter, de lo contrario escrbibe ESC");

  }
  alert("El total a pagar + IVA es: $" + precioFinal);
}


// DECLARACION DE LA FUNCION DE ARRIBA
escogerLibro();
