
class Libro{
  constructor(nombre, precio, autor){
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
  }
  precioFinal(){
    return this.precio *= 1.21;
  }
}
//DECLARACION DEL ARRAY CONTENEDOR DE LOS OBJETOS LIBROS
const libros =[];

//DECLARACION DEL ARRAY CONTENEDOR DE FUTUROS LIBROS
const futurosLibros = [];

//DECLARACION DE LOS OBJETOS USANDO LA CLASE "LIBRO"
const elPrincipito = new Libro("El principito", 1200,"Antoine de Saint-Exupéry");
const perroSiberiano = new Libro("El perro siberiano", 2200, "Antonio Santa Ana");
const laOdisea = new Libro("La odisea",3500, "Homero");

//AGREGO LOS OBJETOS DE LOS LIBROS AL ARRAY CONTENEDOR 
libros.push(elPrincipito, perroSiberiano,laOdisea);


//RECORRO EL ARRAY CONTENDOR PARA USAR LA FUNCION DEL IVA Y GUARDAR EL PRECIO FINAL
for(const libro of libros){
  libro.precioFinal();
}

function escogerLibro(libro) {
  alert("Bienvenido a la tienda de libros!!!");
  //VARIABLE SALIDA PARA PODER SALIR DEL CICLO
  let salida = "";
  let precioFinal = 0;
  let opcion = 0;
  while (salida != "ESC") {
    opcion = parseInt(prompt("Escoge un libro escribiendo el numero de referencia: \n 1) El principito $" +libros[0].precio+"  \n 2) El perro siberiano $"+libros[1].precio+" \n 3) La odisea $"+libros[2].precio));
    //CONDICIONAL PARA SABER QUE LIBRO ELIJE EL USUARIO
    if(opcion==1){
      precioFinal += libros[0].precio;
    }
    else if(opcion==2){
      precioFinal += libros[1].precio;
    }
    else if(opcion==3){
      precioFinal += libros[2].precio;
    }
    else{
      alert("Porfavor ingrese un numero que corresponda al libro a comprar, muchas gracias!!!");
    }
    salida = prompt("Si quieres seguir comprando solo da enter, de lo contrario escrbibe ESC o esc").toUpperCase();
  }
  alert("El total a pagar + IVA es: $" + precioFinal);
}

//CREO UNA FUNCION QUE SE ENCARGA DE AÑADIR UN LIBRO QUE SOLICITA EL USUARIO
function futuroLibro(){
  let salida = prompt("Si desea agregar un libro para que lo tengamos en cuenta solo apreta enter de lo contrario escribe ESC o esc").toUpperCase();
  while(salida != "ESC"){
    let nombre = prompt("Escriba el nombre del libro");
    let autor = prompt("Escriba el autor");

    //AÑADO AL ARRAY LOS FUTUROS LIBROS A TENER EN CUENTA;
    futurosLibros.push(new Libro(nombre, 0, autor));
    salida = prompt("Si desea agregar un libro para que lo tengamos en cuenta solo apreta enter de lo contrario escribe ESC o esc").toUpperCase();
  }
}


// INVOCACION DE LA FUNCION escogerLibro
escogerLibro();

//INVOCO LA FUNCION fututroLibro
futuroLibro();

