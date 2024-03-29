//DECLARACION DE LAS VARIABLES

let cards = document.getElementById('card-container');
let contendorCarrito = document.getElementById('contenedor-carrito-body');
let carrito = [];
let total = document.getElementById('carrito-total');
let librosCantidad = document.getElementById('carrito-items-total');
let vaciarBtn = document.getElementById('vaciar-carrito');
let alertaCarrito = document.getElementById('alertCarrito');
var select = document.getElementById('filtros');
var value = select.options[select.selectedIndex].value;

//EVENT LISTENER CUANDO SE CARGA TODO EL CONTENIDO

document.addEventListener('DOMContentLoaded', () => {
    //Utilizo el operador ||
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    //Dibujo el carrito al momento de cargar la pagina
    dibujarCarrito();
});

//OBJETOS

class UI {
    constructor() {}

    //metodo encargado de mostrar un mensaje cuando se agrega al carrito
    mostrarAlertaCarrito(titulo, mensaje) {
        swal({
            title: titulo,
            text: mensaje,
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
    }

    //metodo encargado de mostrar una simple alerta
    simpleAlerta(mensaje, tipo) {
        const alerta = document.createElement('div');
        if (tipo === 'error') {
            alerta.textContent = mensaje;
            alerta.classList.add('alert-danger');
        } else {
            alerta.textContent = mensaje;
            alerta.classList.add('alert-success');
            formulario.reset();
        }

        alerta.classList.add('alert');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//inicializo el objeto en una varibale para poder llamarlo despues
const ui = new UI();

//Añado las cards con los libros que tengo implementando fetch
function dibujarCards() {
    fetch('../json/stock.json')
        .then((res) => res.json())
        .then((data) => {
            const libros = data.libros;
            // FILTRAR USANDO PROMISES
            select.addEventListener('change', (e) => {
                return new Promise((resolve, reject) => {
                    const option = e.srcElement.value;
                    if (option == 'menor') {
                        //AQUI ORDENO DEL MENOR PRECIO AL MAYOR
                        libros.map(() => {
                            resolve(libros.sort((a, b) => a.precio - b.precio));
                        });
                    } else if (option == 'mayor') {
                        //AQUI ORDENO DE MAYOR PRECIO AL MENOR
                        libros.map(() => {
                            resolve(libros.sort((a, b) => b.precio - a.precio));
                        });
                    } else if (option == 'a-z') {
                        //AQUI ORDENO ALFABETICAMENTE
                        libros.map(() => {
                            resolve(
                                libros.sort((a, b) => {
                                    if (a.nombre < b.nomre) {
                                        return -1;
                                    }
                                    if (a.nombre > b.nombre) {
                                        return 1;
                                    }
                                    return 0;
                                })
                            );
                        });
                    } else if (option == 'z-a') {
                        //AQUI ORDENO DE LA Z A LA A
                        libros.map(() => {
                            resolve(
                                libros.sort((a, b) => {
                                    if (a.nombre > b.nomre) {
                                        return -1;
                                    }
                                    if (a.nombre < b.nombre) {
                                        return 1;
                                    }
                                    return 0;
                                })
                            );
                        });
                    } else {
                        resolve();
                    }
                }).then(() => {
                    cards.innerHTML = '';
                    pintarCards();
                });
            });

            // libros.map(() => {
            //     libros.sort((a, b) => b.precio - a.precio);
            // });
            function pintarCards() {
                libros.forEach((libro) => {
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
                });
            }
            pintarCards();

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

                //Llamo al objeto ui para mostrar la alerta
                ui.mostrarAlertaCarrito(
                    'Producto agregado!',
                    'Agregado al carrito de compra!!!'
                );

                dibujarCarrito();
            }
        })
        .catch((err) => console.log(err));
}

//  Dibujo las cards
dibujarCards();
//ELIMINAR TODOS LOS ITEMS DEL CARRITO
vaciarBtn.addEventListener('click', () => {
    carrito.length = 0;
    dibujarCarrito();
    dibujarCheck();
    resetValues();
    localSave();
});

//FUNCIONES

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

//funcion encargada de guardar en el localStorage
function localSave() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function resetValues() {
    if (carrito.length == 0) {
        total.innerHTML = 0;
        librosCantidad.innerText = 0;
        totalCheck.innerText = 0;
        nombre = '';
        apellido = '';
        pais = ' ';
        mail = '';
    }
}

// function AtoZ(libros) {
//     select.addEventListener('change', (e) => {
//         const option = e.srcElement.value;
//         if (option == 'a-z') {
//             libros.map(() => {
//                 libros.sort((a, b) => a.nombre - b.nombre);
//             });
//             pintarCards();
//             cards.innerHTML = '';
//         } else {
//             return;
//         }
//     });
// }
