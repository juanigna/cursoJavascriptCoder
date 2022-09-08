const scrollBtn = document.querySelector('.scroll-top-btn');

document.addEventListener('DOMContentLoaded', () => {
    //mensaje de Inicio
    swal({
        title: 'Bienvenido a Libros Ya! Que tengas buen dia!!!',
        button: 'A leer!',
    });
});

//Boton de scroll
window.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 1039) {
        scrollBtn.classList.remove('hidden');
    } else {
        scrollBtn.classList.add('hidden');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
    });
});
