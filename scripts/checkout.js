const btnBuy = document.getElementById('btnBuy');
const checkModal = document.querySelector('.modal-body');
const formulario = document.querySelector('#check-form');
EventsListeners();

function EventsListeners() {
    btnBuy.addEventListener('click', checkOut);
}

//Funciones

function checkOut(e) {
    e.preventDefault();
    const nombre = document.getElementById('userName').value;
    const apellido = document.getElementById('userLastName').value;
    const pais = document.getElementById('userPais').value;
    if (nombre == '' || apellido == '' || pais == '') {
        mostrarAlerta('Todos los campos son necesarios', 'error');
        console.log('wrong');
    } else {
        mostrarAlerta('Todos los datos son correctos', 'good');
    }
}

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    if (tipo === 'error') {
        alerta.textContent = mensaje;
        alerta.classList.add('alert-danger');
    } else {
        alerta.textContent = mensaje;
        alerta.classList.add('alert-success');
        if (carrito.length >= 0) {
            dibujarCheck();
        }
    }
    alerta.classList.add('alert');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function dibujarCheck() {
    carrito.forEach((libro) => {
        console.log(libro);
    });
}
