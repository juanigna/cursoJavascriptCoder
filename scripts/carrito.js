let cards = document.getElementById('card-container');
let contendorCarrito = document.getElementById('contenedor-carrito-body');
let carrito = [];
let total = document.getElementById('carrito-total');
let librosCantidad = document.getElementById('carrito-items-total');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        dibujarCarrito();
    }
});

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

//Tomo la alerte mediante id
let alertaCarrito = document.getElementById('alertCarrito');

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

    carritoAlerta();
    setTimeout(() => {
        alertCarrito.classList.remove('active');
    }, 1500);
    dibujarCarrito();
}

function eliminarDelCarrito(btnId) {
    const libro = carrito.find((libro) => libro.id === btnId);
    const indice = carrito.indexOf(libro);
    if (libro.cantidad > 1) {
        libro.cantidad--;
    } else {
        carrito.splice(indice, 1);
    }

    localStorage.setItem('carrito', carrito);
    if (carrito.length == 0) {
        total.innerHTML = 0;
        librosCantidad.innerText = 0;
    }
    dibujarCarrito();
    console.log(carrito);
}

//Dibujar Carrito
function dibujarCarrito() {
    //limpiamos el carrito
    contendorCarrito.innerHTML = '';

    carrito.forEach((libro) => {
        contendorCarrito.innerHTML += `
        <tr>
        <td>${libro.nombre}</td>
        <td>${libro.autor}</td>
        <td>$${libro.precio}</td>
        <td>x${libro.cantidad}</td>
        <td><button class="btn btn-danger" onclick ="eliminarDelCarrito(${libro.id})"> X </button></td>
        </tr>
                
            `;

        total.innerText = carrito.reduce(
            (acc, libro) => acc + libro.precio * libro.cantidad,
            0
        );

        localStorage.setItem('carrito', JSON.stringify(carrito));
        librosCantidad.innerText = carrito.length;
    });
}

//funcion encargada de la alerta del carrito
function carritoAlerta() {
    alertaCarrito.classList.add('active');
}
