const board = document.getElementById("board")
const button = document.getElementById("answerButton")
const resetButton = document.getElementById("resetButton")
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
const possible = (board, y, x, n) => {
    // check row n col
    for (let i = 0; i < 9; i++) {
        if (board[y][i] == n || board[i][x] == n) {
            return false
        }
    }

    const col0 = Math.floor(x / 3) * 3
    const row0 = Math.floor(y / 3) * 3
    // check square
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row0 + row][col0 + col] == n) {
                return false
            }
        }
    }
    return true
}

function solve(board) {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (board[y][x] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (possible(board, y, x, num)) {
                        board[y][x] = num

                        if (solve(board)) return board
                    }
                }

                board[y][x] = 0
                return false
            }
        }
    }

    return board
}

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
    solve(grid)
    flattedGrid = grid.flat(8)

    allInput.forEach((input, index) => {
        input.value = flattedGrid[index]
        input.setAttribute("readonly", "true")
    })
})

resetButton.addEventListener("click", () => {
    allInput.forEach(input => {
        input.value = ""
    })
})
