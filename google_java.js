const background = document.querySelector('img');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    background.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});
