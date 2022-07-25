
//FUNCIONES QUE UTILIZO PARA LA SUMA, RESTA y IVA

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

//CLASE LIBRO PARA CREAR LOS OBJETOS

class Libro{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
  precioFinal(){
    return suma(this.precio, iva(this.precio));
  }
}

//DECLARACION DE LOS OBJETOS USANDO LA CLASE "LIBRO"
const elPrincipito = new Libro("El principito", 1200);
const perroSiberiano = new Libro("El perro siberiano", 2200);
const laOdisea = new Libro("La odisea",3500);
//FUNCION QUE LEE EL LIBRO Y TE DEVUELVE EL PRECIO + IVA
function escogerLibro(libro) {
  alert("Bienvenido a la tienda de libros!!!");
  //VARIABLE SALIDA PARA PODER SALIR DEL CICLO
  let salida = "";
  let precioFinal = 0;
  while (salida != "ESC") {
    libro = parseInt(prompt("Escoge un libro escribiendo el numero de referencia: \n 1) El principito $" +elPrincipito.precio+"  \n 2) El perro siberiano $"+perroSiberiano.precio+" \n 3) La odisea $"+laOdisea.precio));
    //CONDICIONAL PARA SABER QUE LIBRO ELIJE EL USUARIO
    if(libro==1){
      precioFinal += elPrincipito.precioFinal();
      //precioFinal += suma(elPrincipito.precio, iva(elPrincipito.precio));
    }
    else if(libro==2){
      precioFinal += perroSiberiano.precioFinal();
      //precioFinal += suma(perroSiberiano.precio, iva(perroSiberiano.precio));
    }
    else if(libro==3){
      precioFinal += laOdisea.precioFinal();
      //precioFinal += suma(laOdisea.precio, iva(laOdisea.precio));
    }
    else{
      alert("Porfavor ingrese un numero que corresponda al libro a comprar, muchas gracias!!!");
    }
    salida = prompt("Si quieres seguir comprando solo da enter, de lo contrario escrbibe ESC").toUpperCase();
  }
  alert("El total a pagar + IVA es: $" + precioFinal);
}


// INVOCACION DE LA FUNCION escogerLibro
escogerLibro();
