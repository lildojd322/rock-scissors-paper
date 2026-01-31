const selects = document.querySelectorAll('.selects-item')
const fieldPlayer = document.getElementById('1')
const fieldMachine = document.getElementById('2')
const playerScore = document.querySelector('.your-score')
const machineScore = document.querySelector('.machine-score')
const infoWin = document.querySelector('.info')
const buttonReset = document.querySelector('.reset')
const gifWin = document.querySelector('.gifWin')
const gifLose = document.querySelector('.gifLose')
let allWins = parseFloat(document.querySelector('.allWins').textContent)
let allLoses = parseFloat(document.querySelector('.allLoses').textContent)
let playerWin = 0
let machineWin = 0

const saveStatsToLocalStorage = () => {
    const stats = []
    stats.push({ allWins, allLoses })
    localStorage.setItem('stats', JSON.stringify(stats))
}

const loadStatsFromLocalStorage = () => {
    const stats = JSON.parse(localStorage.getItem('stats'))
    if (stats) {
        allLoses = stats[0].allLoses
        allWins = stats[0].allWins
    }
    restats()
}

const restats = () => {
    document.querySelector('.allWins').textContent = allWins
    document.querySelector('.allLoses').textContent = allLoses
    saveStatsToLocalStorage()
}

const randomElement = () => {
    let randomSelect = selects[Math.floor(Math.random() * selects.length)]
    fieldMachine.textContent = randomSelect.querySelector('img').title
}


selects.forEach(e => {
    e.addEventListener('click', (event) => {
        fieldPlayer.textContent = event.target.title
        randomElement()
        if (fieldPlayer.textContent === 'rock' && fieldMachine.textContent === 'scissors' || fieldPlayer.textContent === 'paper' && fieldMachine.textContent === 'rock' || fieldPlayer.textContent === 'scissors' && fieldMachine.textContent === 'paper') {
            playerWin += 1
            playerScore.textContent = playerWin
            infoWin.textContent = 'вы выиграли'
        } else if (fieldPlayer.textContent === 'scissors' && fieldMachine.textContent === 'rock' || fieldPlayer.textContent === 'rock' && fieldMachine.textContent === 'paper' || fieldPlayer.textContent === 'paper' && fieldMachine.textContent === 'scissors') {
            machineWin += 1
            machineScore.textContent = machineWin
            infoWin.textContent = 'вы проиграли'
        } else {
            infoWin.textContent = 'ничья'
        }

        if (machineWin >= 6 && playerWin < machineWin) {
            allLoses += 1
            restats()
            infoWin.textContent = 'Победа за компьютером!'
            buttonReset.style.display = 'block'
            selects.forEach(e => {
                e.style.cssText = 'display: none'
            })
            saveStatsToLocalStorage()
        } else if (playerWin >= 6 && machineWin < playerWin) {
            allWins += 1
            restats()
            infoWin.textContent = 'Победа за вами!'
            buttonReset.style.display = 'block'
            selects.forEach(e => {
                e.style.cssText = 'display: none'
            })
            saveStatsToLocalStorage()
        }
    })
})

buttonReset.addEventListener('click', () => {
    buttonReset.style.display = 'none'
    selects.forEach(e => {
        e.style.cssText = 'display: block'
    })
    playerWin = 0
    machineWin = 0
    gifWin.style.cssText = 'display: none'
    gifLose.style.cssText = 'display: none'
    fieldMachine.textContent = ''
    fieldPlayer.textContent = ''
    playerScore.textContent = playerWin
    machineScore.textContent = machineWin
    infoWin.textContent = 'Выберите предмет'
})

loadStatsFromLocalStorage()