let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container'); // Corrigido a seleção do container
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0; // Corrigida a ortografia
let lastPosition = items.length - 1;

nextButton.onclick = () => {
    console.log("Botão Next");

    // Desativar o item atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    // Atualizar a posição do item ativo
    active = (active === lastPosition) ? firstPosition : active + 1;

    // Ativar o próximo item
    items[active].classList.add('active');
    dots[active].classList.add('active');
};

prevButton.onclick = () => {
    console.log("Botão Prev");

    // Desativar o item atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    // Atualizar a posição do item ativo
    active = (active === firstPosition) ? lastPosition : active - 1;

    // Ativar o item anterior
    items[active].classList.add('active');
    dots[active].classList.add('active');
};