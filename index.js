const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red','green','blue','yellow','pink','purple','orange','black','indigoэб','olive',
'aqua','AntiqueWhite','MediumTurquoise'];

body.style.backgroundColor = 'violet';
button.addEventListener('click',changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.background = colors[colorIndex]
}