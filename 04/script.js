const search = document.querySelector('.btn');

const input = document.querySelector('.search');

const line = document.querySelector('.input');



search.addEventListener('click', () => {
    input.classList.toggle('active')
    line.focus()
});