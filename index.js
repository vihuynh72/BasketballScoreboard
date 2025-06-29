let home = 0
let guest = 0

let homeEl = document.getElementById('home-score')
let guestEl = document.getElementById('guest-score')

function adjust() {
    homeEl.textContent = home
    guestEl.textContent = guest
}

function addOneHome() {
    home += 1
    adjust()
}

function addTwoHome() {
    home += 2
    adjust()
}

function addThreeHome() {
    home += 3
    adjust()
}

function addOneGuest() {
    guest += 1
    adjust()
}

function addTwoGuest() {
    guest += 2
    adjust()
}

function addThreeGuest() {
    guest += 3
    adjust()
}
