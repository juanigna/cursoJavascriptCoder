
class Libro{
  constructor(nombre, precio, autor, anio){
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
    this.anio = anio;
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
const elPrincipito = new Libro("el principito", 1200,"Antoine de Saint-Exupéry");
const perroSiberiano = new Libro("el perro siberiano", 2200, "Antonio Santa Ana");
const laOdisea = new Libro("la odisea",3500, "Homero");

//AGREGO LOS OBJETOS DE LOS LIBROS AL ARRAY CONTENEDOR 
libros.push(elPrincipito, perroSiberiano,laOdisea);


//RECORRO EL ARRAY CONTENDOR PARA USAR LA FUNCION DEL IVA Y GUARDAR EL PRECIO FINAL
libros.forEach(libro =>libro.precioFinal());

//FUNCION PARA ENCOTRAR EL NOMBRE DEL LIBRO
function findName(array, nombre){
  return array.find(title => title.nombre == nombre);
}


//FUNCION PARA ORDENAR LOS AÑOS DE LOS LIBROS DE FORMA ASCENDENTE
function ordenarNums(array){
  
  array.sort((a,b) =>a.anio - b.anio);
}

//FUNCION PARA MOSTRAR LOS DATOS DE LOS LIBROS AGREGADOS POR EL USUARIO
function imprimirDatos(cadena, array){
  let mostrar = array.map(libro=>"Nombre: " + libro.nombre +"\n" +"Año: "+ libro.anio +"\n");
  alert(cadena+ "\n"+mostrar);
 
}
function escogerLibro(libro) {
  alert("Bienvenido a la tienda de libros!!!");
  //VARIABLE SALIDA PARA PODER SALIR DEL CICLO
  let salida = "";
  let precioFinal = 0;
  let titulo;
  
  while (salida != "ESC") {
    titulo = prompt("Escoge un libro escribiendo el nombre tal cual se lee: \n 1) El principito $" +libros[0].precio+"  \n 2) El perro siberiano $"+libros[1].precio+" \n 3) La odisea $"+libros[2].precio).toLowerCase();
    let opcion = findName(libros, titulo);

    //CONDICIONAL PARA VERIFICAR SI EL NOMBRE DEL LIBRO INGRESADO CONCUERDA CON UNO GUARDADO
    if(opcion != undefined){
      precioFinal += opcion.precio;
    }else{
      alert("Ingreso un nombre incorrecto");
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
    let año = parseInt(prompt("Escriba el año"));
    //AÑADO AL ARRAY LOS FUTUROS LIBROS A TENER EN CUENTA SIN TENIENDO EN CUENTA EL PRECIO;
    futurosLibros.push(new Libro(nombre, 0, autor, año));

    //ORDENO LOS LIBROS SEGUN SU AÑO DE FORMA ASCENDENTE
    ordenarNums(futurosLibros);
    salida = prompt("Si desea agregar un libro para que lo tengamos en cuenta solo apreta enter de lo contrario escribe ESC o esc").toUpperCase();
    
  }
  if(futurosLibros.length > 0){
 //IMPRIMO EN PANTALLA LOS LIBROS AGREGADOS POR EL USUARIOa
  imprimirDatos("Los libros que usted agrego para que tengamos en cuenta son: ",futurosLibros);
  }else{
    alert("Muchas gracias!!!");
  }
 
}

// INVOCACION DE LA FUNCION escogerLibro
escogerLibro();

//INVOCO LA FUNCION fututroLibro
futuroLibro();