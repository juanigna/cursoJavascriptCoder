// import { dibujarCards, agregarCarrito, dibujarCarrito } from './carrito';

document.addEventListener('DOMContentLoaded', () => {
    //mensaje de Inicio
    swal({
        title: 'Bienvenido a Libros Ya! Que tengas buen dia!!!',
        button: 'A leer!',
    });
});

//funciones

//FUNCION PARA ENCOTRAR EL NOMBRE DEL LIBRO
function findName(array, nombre) {
    return array.find((title) => title.nombre.toUpperCase() == nombre);
}

//FUNCION PARA ORDENAR LOS AÑOS DE LOS LIBROS DE FORMA ASCENDENTE
function ordenarNums(array) {
    array.sort((a, b) => a.anio - b.anio);
}
