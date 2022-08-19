//DECLARACION DE LAS VARIABLES

let cards = document.getElementById('card-container');
let contendorCarrito = document.getElementById('contenedor-carrito-body');
let carrito = [];
let total = document.getElementById('carrito-total');
let librosCantidad = document.getElementById('carrito-items-total');
let vaciarBtn = document.getElementById('vaciar-carrito');
let alertaCarrito = document.getElementById('alertCarrito');

//EVENT LISTENER CUANDO SE CARGA TODO EL CONTENIDO

document.addEventListener('DOMContentLoaded', () => {
    //Utilizo el operador ||
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    //Dibujo el carrito al momento de cargar la pagina
    dibujarCarrito();
});

//Añado las cards con los libros que tengo
for (const libro of libros) {
    //Destructuracion del objeto
    const { img, nombre, autor, precio, id } = libro;
    let card = document.createElement('div');
    card.className =
        'card p-0 justify-content-center align-items-center text-center';
    card.innerHTML = `
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body justify-content-center">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Autor: ${autor}</p>
        <p class="card-text">Precio: $${precio}</p>
        <a id="buyBtn${id}" class="btn btn-primary m-auto">Comprar!</a>
    </div>
    `;
    cards.appendChild(card);
    const addBtn = document.getElementById(`buyBtn${id}`);
    addBtn.addEventListener('click', () => {
        agregarCarrito(id);
        dibujarCheck();
    });
}

//ELIMINAR TODOS LOS ITEMS DEL CARRITO
vaciarBtn.addEventListener('click', () => {
    carrito.length = 0;
    dibujarCarrito();
    dibujarCheck();
    resetValues();
    localSave();
});

//FUNCIONES

//funcion que agrega al carrito y arroja una alerta
function agregarCarrito(libroId) {
    const existe = carrito.some((libro) => libro.id == libroId);
    if (existe) {
        const prod = carrito.map((prod) => {
            if (prod.id == libroId) {
                prod.cantidad++;
            }
        });
    } else {
        const libro = libros.find((libro) => libro.id === libroId);
        carrito.push(libro);
    }

    swal({
        title: '¡Producto agregado!',
        text: `Agregado al carrito de compra.`,
        icon: 'success',
        buttons: {
            cerrar: {
                text: 'Cerrar',
                value: false,
            },
            carrito: {
                text: 'Ir a carrito',
                value: true,
            },
        },
    }).then((promesa) => {
        if (promesa) {
            //swal("Vamos al carrito!");
            const myModal = new bootstrap.Modal(
                document.getElementById('exampleModal'),
                { keyboard: true }
            );
            const modalToggle = document.getElementById('toggleMyModal');
            myModal.show(modalToggle);
        }
    });

    dibujarCarrito();
}

//FUNCION ENCARGADA DE ELIMANAR ITEM DEL CARRITO
function eliminarDelCarrito(libroId) {
    const libro = carrito.find((libro) => libro.id === libroId);
    // const indice = carrito.indexOf(libro);
    if (libro.cantidad > 1) {
        libro.cantidad--;
    } else {
        carrito = carrito.filter((libro) => libro.id != libroId);
    }

    //reseto los valores
    resetValues();
    //guardo en el localStorage
    localSave();
    //dibujo el carrito y el checkout
    dibujarCarrito();
    dibujarCheck();
}

//Dibujar Carrito
function dibujarCarrito() {
    //limpiamos el carrito
    contendorCarrito.innerHTML = '';

    carrito.forEach((libro) => {
        //Destructuracion del objeto
        console.log(libro);
        const { nombre, autor, precio, cantidad, id } = libro;

        //Muestro los objetos que hay en el carrito
        contendorCarrito.innerHTML += `
        <tr>
        <td>${nombre}</td>
        <td>${autor}</td>
        <td>$${precio}</td>
        <td>x${cantidad}</td>
        <td><button class="btn btn-danger" onclick ="eliminarDelCarrito(${id})"> X </button></td>
        </tr>
                
            `;

        total.innerText = carrito.reduce(
            (acc, libro) => acc + libro.precio * libro.cantidad,
            0
        );

        localSave();
        librosCantidad.innerText = carrito.length;
    });
}

//funcion encargada de la alerta del carrito
function carritoAlerta() {
    alertaCarrito.classList.add('active', 'alert');
}

//funcion encargada de guardar en el localStorage
function localSave() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function resetValues() {
    if (carrito.length == 0) {
        total.innerHTML = 0;
        librosCantidad.innerText = 0;
        totalCheck.innerText = 0;
    }
}
