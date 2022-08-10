class Libro {
    constructor(id, nombre, precio, autor, anio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.anio = anio;
        this.img = img;
        this.cantidad = 1;
    }
    precioFinal() {
        return (this.precio *= 1.21);
    }
}

//DECLARACION DEL ARRAY CONTENEDOR DE LOS OBJETOS LIBROS
const libros = [];

//DECLARACION DEL ARRAY CONTENEDOR DE FUTUROS LIBROS
const proximos = [];

//DECLARACION DE LOS OBJETOS USANDO LA CLASE "LIBRO"

const elPrincipito = new Libro(
    1,
    'El principito',
    1200,
    'Antoine de Saint-Exupéry',
    1943,
    './assets/el-principito.jpg'
);
const perroSiberiano = new Libro(
    2,
    'Los ojos del perro siberiano',
    2200,
    'Antonio Santa Ana',
    1998,
    './assets/perro-siberiano.jpg'
);
const laOdisea = new Libro(
    3,
    'la odisea',
    3500,
    'Homero',
    1800,
    './assets/odisea.jpg'
);

//AGREGO LOS OBJETOS DE LOS LIBROS AL ARRAY CONTENEDOR
libros.push(elPrincipito, perroSiberiano, laOdisea);
libros.push(
    new Libro(4, '1984', 1900, 'George Orwell', 1949, './assets/1984.webp')
);
libros.push(
    new Libro(
        5,
        'Un Mundo Feliz',
        2100,
        'Aldous Huxley',
        1932,
        './assets/mundo-feliz.jpg'
    )
);
libros.push(
    new Libro(
        6,
        'Fahrenheit 451',
        3000,
        'Ray Bradbury',
        1953,
        './assets/fahrenheit.webp'
    )
);
libros.push(
    new Libro(
        7,
        'Rebelión en la granja',
        3900,
        'George Orwell',
        1945,
        './assets/granja.jpg'
    )
);
libros.push(
    new Libro(
        8,
        'El cuento de la criada',
        4100,
        'Margaret Atwood',
        1985,
        './assets/criada.jpg'
    )
);
