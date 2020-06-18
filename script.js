const container = document.getElementById('container')

const projects = [
    { "name": "Breakout Game", "link": "Breakout-Game", "img": "./imgs/breakout.png" },
    { "name": "Memory Cards", "link": "Memory-Cards", "img": "./imgs/memory-cards.jpg" },
    { "name": "Speech Text Reader", "link": "Speech-Text-Reader", "img": "./imgs/speech-text-reader.jpg" },
    { "name": "Dom Methods", "link": "Dom-Methods", "img": "./imgs/dom-methods.jpg" },
    { "name": "Menu Modal", "link": "Menu-Modal", "img": "./imgs/menu-modal.jpg" },
    { "name": "Typing Game", "link": "Typing-Game", "img": "./imgs/typing-game.jpg" },
    { "name": "Exapanse Tracker", "link": "Exapanse-Tracker", "img": "./imgs/expance-tracker.jpg" },
    { "name": "Movie Seat", "link": "Movie-Seat", "img": "./imgs/movie-seat.jpg" },
    { "name": "Video", "link": "Video", "img": "./imgs/video.jpg" },
    { "name": "Exchange Rate Calculator", "link": "Exchange-Rate-Calculator", "img": "./imgs/exchange-rate.jpg" },
    { "name": "Music Player", "link": "Music-Player", "img": "./imgs/music-player.png" },
    { "name": "Form Validator", "link": "Form-Validator", "img": "./imgs/form-validator.jpg" },
    { "name": "NewYear CountDown", "link": "NewYear-CountDown", "img": "./imgs/new-year.png" },
    { "name": "Hangman", "link": "Hangman", "img": "./imgs/hangman.jpg" },
    { "name": "Number Guessing Game", "link": "Number-Guessing-Game", "img": "./imgs/guess-number.png" },
    { "name": "Infinite Scroll", "link": "Infinite-Scroll", "img": "./imgs/infinite-scroll.jpg" },
    { "name": "Lyrics Search", "link": "Lyrics-Search", "img": "./imgs/lyrics-search.jpg" },
    { "name": "Relaxer", "link": "Relaxer", "img": "./imgs/relaxer.png" },
    { "name": "Meal Search", "link": "Meal-Search", "img": "./imgs/meals-search.jpg" },
    { "name": "Sortable List", "link": "Sortable-List", "img": "./imgs/sortable-list.png" },
]

const addProjectToDOM = () => {
    container.innerHTML = projects.map(project => `
        <div class='box' data-link='./${project.link}/index.html'>
            <img src='${project.img}'/>
            <div class='title'>${project.name}</div>
        </div>
    `).join('')

    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            window.open(box.getAttribute('data-link'), '__blank')
        })
    })
}

addProjectToDOM()