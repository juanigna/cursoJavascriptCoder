//DECLARACION DE VARIABLES

const btnBuy = document.getElementById('btnBuy');
const checkModal = document.querySelector('.modal-body');
const formulario = document.querySelector('#check-form');
const librosCheck = document.querySelector('#libros-check');
const totalCheck = document.querySelector('#carrito-total-check');
const mailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const uiCheck = new UI();

//Funciones

//Funcion encargada de los eventos
function EventsListeners() {
    btnBuy.addEventListener('click', checkOut);
    document.addEventListener('DOMContentLoaded', dibujarCheck);
}

//Funcion encargadad de validar el checkout
const checkOut = (e) => {
    e.preventDefault();

    //variables encargada de los inputs
    const nombre = document.getElementById('userName').value;
    const apellido = document.getElementById('userLastName').value;
    const pais = document.getElementById('userPais').value;
    const mail = document.getElementById('userMail').value;

    //valido si los inputs estan vacios
    if (nombre == '' || apellido == '' || pais == '' || mail == '') {
        ui.simpleAlerta('Todos los campos son necesarios', 'error');
    } else if (Number(nombre) || Number(pais) || Number(apellido)) {
        ui.simpleAlerta('Debe ingreser un dato valido', 'error');
    } else {
        //validacion del mail mediante un regex
        if (mailRegex.test(mail)) {
            if (carrito.length > 0) {
                ui.simpleAlerta('Compra con exito, muchas gracias!!!');
                carrito.forEach((libro) => {
                    libro.cantidad = 1;
                });
                carrito.length = 0;
                resetValues();
                dibujarCheck();
                dibujarCarrito();
                localSave();
                return;
            } else {
                ui.simpleAlerta(
                    'Debes tener productos en el carrito!!!',
                    'error'
                );
            }
        } else {
            ui.simpleAlerta('El email ingresado no es correcto.', 'error');
        }
    }
};

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

//Llamo a los eventos
EventsListeners();
