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

//stock de los libros
const libros = [
    {
        id: 1,
        nombre: 'El principito',
        precio: 1200,
        autor: 'Antoine de Saint-Exupéry',
        anio: 1943,
        img: './assets/el-principito.jpg',
        cantidad: 1,
    },
    {
        id: 2,
        nombre: 'Los ojos del perro siberiano',
        precio: 2200,
        autor: 'Antonio Santa Ana',
        anio: 1998,
        img: './assets/perro-siberiano.jpg',
        cantidad: 1,
    },
    {
        id: 3,
        nombre: 'la odisea',
        precio: 3500,
        autor: 'Homero',
        anio: 1800,
        img: './assets/odisea.jpg',
        cantidad: 1,
    },
    {
        id: 4,
        nombre: '1984',
        precio: 1900,
        autor: 'George Orwell',
        anio: 1949,
        img: './assets/1984.webp',
        cantidad: 1,
    },
    {
        id: 5,
        nombre: 'Un Mundo Feliz',
        precio: 2100,
        autor: 'Aldous Huxley',
        anio: 1932,
        img: './assets/mundo-feliz.jpg',
        cantidad: 1,
    },
    {
        id: 6,
        nombre: 'Fahrenheit 451',
        precio: 3000,
        autor: 'Ray Bradbury',
        anio: 1953,
        img: './assets/fahrenheit.webp',
        cantidad: 1,
    },
    {
        id: 7,
        nombre: 'Rebelión en la granja',
        precio: 3900,
        autor: 'George Orwell',
        anio: 1945,
        img: './assets/granja.jpg',
        cantidad: 1,
    },
    {
        id: 8,
        nombre: 'El cuento de la criada',
        precio: 4100,
        autor: 'Margaret Atwood',
        anio: 1985,
        img: './assets/criada.jpg',
        cantidad: 1,
    },
    {
        id: 9,
        nombre: 'Padre rico Padre pobre',
        precio: 3350,
        autor: 'Robert Kiyosaki',
        anio: 1997,
        img: './assets/padrericopobre.jpg',
        cantidad: 1,
    },
];
