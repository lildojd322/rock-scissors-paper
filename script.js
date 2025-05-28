const selects = document.querySelectorAll('.selects-item')
const fieldPlayer = document.getElementById('1')
const fieldMachine = document.getElementById('2')
const playerScore = document.querySelector('.your-score')
const machineScore = document.querySelector('.machine-score')
const infoWin = document.querySelector('.info')
const buttonReset = document.querySelector('.reset')
const gifWin = document.querySelector('.gifWin')
const gifLose = document.querySelector('.gifLose')
let playerWin = 0
let machineWin = 0


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
            infoWin.textContent = 'вы выйграли'
        } else if (fieldPlayer.textContent === 'scissors' && fieldMachine.textContent === 'rock' || fieldPlayer.textContent === 'rock' && fieldMachine.textContent === 'paper' || fieldPlayer.textContent === 'paper' && fieldMachine.textContent === 'scissors') {
            machineWin += 1
            machineScore.textContent = machineWin
            infoWin.textContent = 'вы проиграли'
        } else {
            infoWin.textContent = 'ничья'
        }

        if (machineWin >= 6 && playerWin < machineWin) {
            infoWin.textContent = 'Победа за компьютером!'
            gifLose.style.cssText = 'display: block'
            buttonReset.style.display = 'block'
            selects.forEach(e => {
                e.style.cssText = 'display: none'
            })
        } else if (playerWin >= 6 && machineWin < playerWin) {
            infoWin.textContent = 'Победа за вами!'
            gifWin.style.cssText = 'display: block'
            buttonReset.style.display = 'block'
            selects.forEach(e => {
                e.style.cssText = 'display: none'
            })
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