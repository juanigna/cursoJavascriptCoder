const btnBuy = document.getElementById('btnBuy');
const checkModal = document.querySelector('.modal-body');
const formulario = document.querySelector('#check-form');
const librosCheck = document.querySelector('#libros-check');
const totalCheck = document.querySelector('#carrito-total-check');

EventsListeners();

function EventsListeners() {
    btnBuy.addEventListener('click', checkOut);
    document.addEventListener('DOMContentLoaded', dibujarCheck);
}

//Funciones

//Funcion encargadad de validar el checkout
function checkOut(e) {
    e.preventDefault();
    const nombre = document.getElementById('userName').value;
    const apellido = document.getElementById('userLastName').value;
    const pais = document.getElementById('userPais').value;
    if (nombre == '' || apellido == '' || pais == '') {
        mostrarAlerta('Todos los campos son necesarios', 'error');
        console.log('wrong');
    } else {
        if (carrito.length > 0) {
            mostrarAlerta('Compra con exito, muchas gracias!!!');
            carrito.length = 0;
            console.log(carrito);
            resetValues();
            dibujarCheck();
            dibujarCarrito();
            localSave();
            return;
        } else {
            mostrarAlerta('Debes tener productos en el carrito!!!', 'error');
        }
    }
}

//Funcion encargadad de mostrar la alerta

function mostrarAlerta(mensaje, tipo) {
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

//Funcion encargada de dibuajr el checkOut
function dibujarCheck() {
    limpiarHtml(librosCheck);
    carrito.forEach((libro) => {
        //Destructuracion
        const { nombre, precio, cantidad } = libro;

        const row = document.createElement('div');
        row.classList.add('mb-3', 'libroCheck');
        row.innerHTML = `Nombre: ${nombre} Precio: ${precio} Cantidad: ${cantidad}`;
        librosCheck.appendChild(row);

        totalCheck.innerText = carrito.reduce(
            (acc, libro) => acc + libro.precio * libro.cantidad,
            0
        );

        localSave();
    });
}

//Funcion encargada de limpiar el html
function limpiarHtml(bloque) {
    while (bloque.firstChild) {
        bloque.removeChild(bloque.firstChild);
    }
}
