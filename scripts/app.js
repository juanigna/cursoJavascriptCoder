class Libro {
    constructor(nombre, precio, autor, anio, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.anio = anio;
        this.img = img;
    }
    precioFinal() {
        return (this.precio *= 1.21);
    }
}

//DECLARACION DEL ARRAY CONTENEDOR DE LOS OBJETOS LIBROS
const libros = [];

//DECLARACION DEL ARRAY CONTENEDOR DE FUTUROS LIBROS
const futurosLibros = [];

//DECLARACION DE LOS OBJETOS USANDO LA CLASE "LIBRO"
const elPrincipito = new Libro(
    'El principito',
    1200,
    'Antoine de Saint-Exupéry',
    1943,
    './assets/el-principito.jpg'
);
const perroSiberiano = new Libro(
    'Los ojos del perro siberiano',
    2200,
    'Antonio Santa Ana',
    1998,
    './assets/perro-siberiano.jpg'
);
const laOdisea = new Libro(
    'la odisea',
    3500,
    'Homero',
    1800,
    './assets/odisea.jpg'
);

//AGREGO LOS OBJETOS DE LOS LIBROS AL ARRAY CONTENEDOR
libros.push(elPrincipito, perroSiberiano, laOdisea);
libros.push(
    new Libro('1984', 1900, 'George Orwell', 1949, './assets/1984.webp')
);
libros.push(
    new Libro(
        'Un Mundo Feliz',
        2100,
        'Aldous Huxley',
        1932,
        './assets/mundo-feliz.jpg'
    )
);
libros.push(
    new Libro(
        'Fahrenheit 451',
        3000,
        'Ray Bradbury',
        1953,
        './assets/fahrenheit.webp'
    )
);
libros.push(
    new Libro(
        'Rebelión en la granja',
        3900,
        'George Orwell',
        1945,
        './assets/granja.jpg'
    )
);
libros.push(
    new Libro(
        'El cuento de la criada',
        4100,
        'Margaret Atwood',
        1985,
        './assets/criada.jpg'
    )
);

//RECORRO EL ARRAY CONTENDOR PARA USAR LA FUNCION DEL IVA Y GUARDAR EL PRECIO FINAL
libros.forEach((libro) => libro.precioFinal());
//FUNCION PARA ENCOTRAR EL NOMBRE DEL LIBRO
function findName(array, nombre) {
    return array.find((title) => title.nombre.toUpperCase() == nombre);
}

//FUNCION PARA ORDENAR LOS AÑOS DE LOS LIBROS DE FORMA ASCENDENTE
function ordenarNums(array) {
    array.sort((a, b) => a.anio - b.anio);
}

//ORDENO EL ARRAY PARA QUE LOS LIBROS ESTEN ORDENADOS POR EL PRECIO DE MANERA ASCENDENTE
libros.sort((a, b) => a.precio - b.precio);

let cards = document.getElementById('card-container');

for (const libro of libros) {
    let card = document.createElement('div');
    card.className =
        'card p-0 justify-content-center align-items-center text-center';
    card.innerHTML = `
    <img src="${libro.img}" class="card-img-top" alt="...">
    <div class="card-body justify-content-center">
      <h5 class="card-title">${libro.nombre}</h5>
      <p class="card-text">Autor: ${libro.autor}</p>
      <p class="card-text">Precio: $${libro.precio}</p>
      <a href="#" class="btn btn-primary m-auto">Comprar!</a>
    </div>
  `;
    cards.appendChild(card);
}

let nombreUsuario = prompt('Hola! Cual es su nombre? ');

function nombreBienvenida(nombre) {
    let headerSection = document.getElementById('header-portada');
    let titulo = document.createElement('h1');
    titulo.className = 'bold fs-1 text-white text-center mt-4';
    let mensaje = `Bienvenido! ${nombre}`;
    titulo.innerHTML = mensaje;
    headerSection.appendChild(titulo);
}
if (nombreUsuario != null) {
    nombreBienvenida(nombreUsuario);
} else {
    nombreBienvenida('Que tengas buen dia!');
}

//FUNCION PARA MOSTRAR LOS DATOS DE LOS LIBROS AGREGADOS POR EL USUARIO
function imprimirDatos(cadena, array) {
    let mostrar = array.map(
        (libro) =>
            'Nombre: ' + libro.nombre + '\n' + 'Año: ' + libro.anio + '\n'
    );
    alert(cadena + '\n' + mostrar);
}
function escogerLibro(libro) {
    alert('Bienvenido a la tienda de libros!!!');
    //VARIABLE SALIDA PARA PODER SALIR DEL CICLO
    let salida = '';
    let precioFinal = 0;
    let titulo;

    while (salida != 'ESC') {
        titulo = prompt(
            'Escoge un libro escribiendo el nombre tal cual se lee: \n 1) El principito $' +
                libros[0].precio +
                '  \n 2) El perro siberiano $' +
                libros[1].precio +
                ' \n 3) La odisea $' +
                libros[2].precio
        ).toUpperCase();
        let opcion = findName(libros, titulo);

        //CONDICIONAL PARA VERIFICAR SI EL NOMBRE DEL LIBRO INGRESADO CONCUERDA CON UNO GUARDADO
        if (opcion != undefined) {
            precioFinal += opcion.precio;
        } else {
            alert('Ingreso un nombre incorrecto');
        }
        salida = prompt(
            'Si quieres seguir comprando solo da enter, de lo contrario escrbibe ESC o esc'
        ).toUpperCase();
    }
    alert('El total a pagar + IVA es: $' + precioFinal);
}

//CREO UNA FUNCION QUE SE ENCARGA DE AÑADIR UN LIBRO QUE SOLICITA EL USUARIO
function futuroLibro() {
    let salida = prompt(
        'Si desea agregar un libro para que lo tengamos en cuenta solo apreta enter de lo contrario escribe ESC o esc'
    ).toUpperCase();
    while (salida != 'ESC') {
        let nombre = prompt('Escriba el nombre del libro');
        let autor = prompt('Escriba el autor');
        let año = parseInt(prompt('Escriba el año'));
        //AÑADO AL ARRAY LOS FUTUROS LIBROS A TENER EN CUENTA SIN TENIENDO EN CUENTA EL PRECIO;
        futurosLibros.push(new Libro(nombre, 0, autor, año));

        //ORDENO LOS LIBROS SEGUN SU AÑO DE FORMA ASCENDENTE
        // ordenarNums(futurosLibros);
        salida = prompt(
            'Si desea agregar un libro para que lo tengamos en cuenta solo apreta enter de lo contrario escribe ESC o esc'
        ).toUpperCase();
    }
    alert('Muchas gracias!!!');
}

// INVOCACION DE LA FUNCION escogerLibro
escogerLibro();

//INVOCO LA FUNCION fututroLibro
futuroLibro();

console.log(futurosLibros);
//creo la varibale para utilizar la seccion de los futuros libros
let futurosSeccion = document.getElementById('futuros-libros');
//creo la tabla desde js y su cuerpo
let tabla = document.createElement('table');
tabla.className = 'table table-striped';
let tbody = document.createElement('tbody');

//recorro el array de los futuros libros
for (const libro of futurosLibros) {
    //agrego al body de la tabla los datos de los libros
    tbody.innerHTML += `
      <tr>
          <th>${libro.nombre}<th>
          <th>${libro.autor}<th>
          <th>${libro.anio}<th>
      </tr>
  `;
}
//añado a la tabla el cuerpo
tabla.appendChild(tbody);

//finalmente añado la tabla a la seccion
futurosSeccion.appendChild(tabla);
