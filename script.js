const meGusta = document.querySelector('.meGusta');
const times = document.querySelector('#tiempo');

let tiempoClick = 0;
let tiempoClickeado = 0;

meGusta.addEventListener('click', (e) => {
    if(tiempoClick === 0) {
        tiempoClick = new Date().getTime()
    } else {
        if((new Date().getTime() - tiempoClick) < 800) {
            crearCorazon(e);
            tiempoClick = 0;
        } else {
            tiempoClick = new Date().getTime();
        }
    }
});

const crearCorazon = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    meGusta.appendChild(heart);

    times.innerHTML = ++tiempoClickeado;

    setTimeout(() => heart.remove(), 1000);
}