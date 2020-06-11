// pull doms
const rulesBtn = document.getElementById('rules-btn')
const rulesEl = document.getElementById('rules')
const closeBtn = document.getElementById('close-btn')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let score = 0

// create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}
// draw ball
const drawBall = () => {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}
// create paddle props
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}
// draw paddle
const drawPaddle = () => {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}
// draw score
const drawScore = () => {
    ctx.font = '20px Arial'
    ctx.fillText(`Score:${score}`, canvas.width - 120, 30)
}

// draw everything
const draw = () => {
    drawBall()
    drawPaddle()
    drawScore()
}

// event listeners 
rulesBtn.addEventListener('click', e => {
    rulesEl.classList.add('show')
})
closeBtn.addEventListener('click', e => {
    rulesEl.classList.remove('show')
})

// init 
draw()