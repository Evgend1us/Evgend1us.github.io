const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 +'deg) rotateY('+ (event.offsetX - halfHeight) / 5 +'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotate(0)'
}

VANTA.WAVES({
    el: "#cont",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x570088,
    shininess: 20.00,
    waveHeight: 20,
    waveSpeed: 0.5,
    zoom: 0.80
  })