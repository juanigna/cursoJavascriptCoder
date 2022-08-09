

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

//Añado las cartas con los libros que tengo
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
      <a id="buyBtn${libro.id}" class="btn btn-primary m-auto">Comprar!</a>
    </div>
  `;
    cards.appendChild(card);
    const addBtn = document.getElementById(`buyBtn${libro.id}`);
    addBtn.addEventListener('click', () => {
        agregarCarrito(libro.id);
    });
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

//Tomo la alerte mediante id
let alertaCarrito = document.getElementById('alertCarrito');

//funcion que agrega al carrito y arroja una alerta
function agregarCarrito(libroId) {
    const libro = libros.find((libro) => libro.id === libroId);
    carrito.push(libro);
    carritoAlerta();
    setTimeout(() => {
        alertCarrito.classList.remove('active');
    }, 1500);
    console.log(carrito);
}

//funcion encargada de la alerta del carrito
function carritoAlerta() {
    alertaCarrito.classList.add('active');
}

//variable encargada de tomar la seccion de los proximos libros
const proximosSeccion = document.getElementById('mostrar-futuros-libros');

//Tomo el formulario
let formLibros = document.getElementById('futuros-libros');

const tituloFuturo = document.getElementById('titulo-futuro');
const autorFuturo = document.getElementById('autor-futuro');

//verifico que el usuario introdujo algo y lo guardo en proximos
formLibros.onsubmit = (e) => {
    e.preventDefault();
    if (tituloFuturo.value.length == 0) {
        alert('Ingrese un titulo valido!');
        // } else if (!isNaN(autorFuturo) || autorFuturo == '') {
        //     alert('Ingrese un autor valido!');
        return;
    }
    if (autorFuturo.value.length == 0) {
        alert('Ingrese un autor valido!');
        return;
    }

    proximos.push(new Libro(0, tituloFuturo.value, 0, autorFuturo.value, 0, 0));
    pintarProximos();
};

//funcion encargada de eliminar un libro
const eliminarProximo = (libroNombre) => {
    const libro = proximos.find((libro) => libro.nombre === libroNombre);
    console.log(libro);
    const indice = proximos.indexOf(libro);
    proximos.splice(indice, 1);
    pintarProximos();
};

//funcion encargada de poner los libros futuros
const pintarProximos = () => {
    proximosSeccion.innerHTML = '';
    proximos.forEach((libro) => {
        let tabla = document.createElement('table');
        tabla.className = 'table table-striped';
        let tbody = document.createElement('tbody');
        tbody.innerHTML = `
            <tr>
                <td>${libro.nombre}</td>
                <td>${libro.autor}</td>
                <td><button class="btn btn-danger" id="Eliminar${libro.nombre}">Eliminar</button></td>
            </tr>
        `;
        tabla.appendChild(tbody);
        proximosSeccion.appendChild(tabla);
        const delBtn = document.getElementById(`Eliminar${libro.nombre}`);
        delBtn.addEventListener('click', () => {
            eliminarProximo(libro.nombre);
        });
    });
};
