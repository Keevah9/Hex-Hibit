const colors = '0123456789ABCDEF';
const btn = document.getElementById('btn')
const colorText = document.querySelector('.colorText')
const flipHead = document.querySelector('.flipHead')

btn.addEventListener('click', flipper)
function flipper(){
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor
    colorText.textContent = randomColor
    colorText.style.color = randomColor
    flipHead.style.color = randomColor
}

function getRandomColor(){
    let hexFul = '#'
    for (let i = 0; i < 6; i++){
        hexFul += colors[Math.floor(Math.random() * colors.length)]
    }
    // console.log(hexFul)
    return hexFul
}

setInterval(() => {
    flipper()
},1500)