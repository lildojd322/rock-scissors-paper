const selects = document.querySelectorAll('.selects-item')
const fieldPlayer = document.getElementById('1')
const fieldMachine = document.getElementById('2')
const randomElement = () => {
    let randomSelect = selects[Math.floor(Math.random() * selects.length)]

}
randomElement()