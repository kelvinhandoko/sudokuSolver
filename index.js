const board = document.getElementById("board")
const button = document.getElementById("answerButton")
const grid = []
const grid0 = []
const grid1 = []
const grid2 = []
const grid3 = []
const grid4 = []
const grid5 = []
const grid6 = []
const grid7 = []
const grid8 = []

for (let i = 0; i < 81; i++) {
    inputElement = document.createElement("input")
    inputElement.setAttribute("type", "number")
    inputElement.setAttribute("min", "1")
    inputElement.setAttribute("max", "9")
    board.append(inputElement)
}

const allInput = document.querySelectorAll('input[type="number"]')

button.addEventListener("click", () => {
    allInput.forEach(input => {
        const number = input.value || 0
        if (grid0.length < 9) {
            grid0.push(number)
        } else if (grid1.length < 9) {
            grid1.push(number)
        } else if (grid2.length < 9) {
            grid2.push(number)
        } else if (grid3.length < 9) {
            grid3.push(number)
        } else if (grid4.length < 9) {
            grid4.push(number)
        } else if (grid5.length < 9) {
            grid5.push(number)
        } else if (grid6.length < 9) {
            grid6.push(number)
        } else if (grid7.length < 9) {
            grid7.push(number)
        } else {
            grid8.push(number)
        }
    })
    grid.push(grid0, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8)
})
const possible = (y, x, number) => {
    for (let i = 0; i < 9; i++) {
        if (grid[y][i])
        
    }
}
