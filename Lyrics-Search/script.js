// pull doms
const form = document.getElementById('form')
const searchEl = document.getElementById('search')
const resultEl = document.getElementById('result')
const moreEl = document.getElementById('more')

// functions
const searchSongs = async (term) => {
    const res = await fetch(`https://api.lyrics.ovh/suggest/${term}`)
    const data = await res.json()
    const songs = data.data
    const total = data.total
    const nextUrl = data.next
    showData(songs, total, nextUrl)
}
const showData = (songs, total, nextUrl) => {
    const ulDom = document.createElement('ul')
    ulDom.className = 'songs'
    ulDom.innerHTML = songs.map(song => `
        <li><span>${song.title}</span><span>${song.artist.name}</span><button>Show Lyrics</button></li>
    `).join('')
    resultEl.appendChild(ulDom)

}

// event listeners
form.addEventListener('submit', e => {
    e.preventDefault()
    const term = searchEl.value.trim()
    if (term) {
        searchSongs(term)
    }
})
