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

let nombreUsuario;

//ORDENO EL ARRAY PARA QUE LOS LIBROS ESTEN ORDENADOS POR EL PRECIO DE MANERA ASCENDENTE
libros.sort((a, b) => a.precio - b.precio);
if (localStorage.getItem('user')) {
    nombreUsuario = localStorage.getItem('user');
} else {
    nombreUsuario = prompt('Hola! Cual es su nombre? ');
}

function nombreBienvenida(nombre) {
    let headerSection = document.getElementById('header-portada');
    let titulo = document.createElement('h1');
    titulo.className = 'bold fs-1 text-white text-center mt-4';
    let mensaje = `Bienvenido! ${nombre}`;
    titulo.innerHTML = mensaje;
    headerSection.appendChild(titulo);
}
if (nombreUsuario != null) {
    localStorage.setItem('user', nombreUsuario);
    nombreBienvenida(nombreUsuario);
} else {
    nombreBienvenida('Que tengas buen dia!');
}
