const sudokuBoards = {
    easy: [
        [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ]
    ],
    medium: [
        [ [0, 2, 0, 6, 0, 8, 0, 0, 0], [5, 8, 0, 0, 0, 9, 7, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 0], [3, 7, 0, 0, 0, 0, 5, 0, 0], [6, 0, 0, 3, 0, 1, 0, 0, 8], [0, 0, 8, 0, 0, 0, 0, 1, 2], [0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 9, 8, 0, 0, 0, 3, 6], [0, 0, 0, 2, 0, 5, 0, 9, 0] ]
    ],
    hard: [
        
        [ [0, 0, 0, 1, 0, 0, 3, 0, 0], [7, 0, 0, 0, 0, 4, 0, 0, 0], [0, 2, 0, 0, 5, 0, 0, 0, 8], [4, 0, 0, 0, 0, 0, 0, 7, 0], [0, 0, 8, 0, 0, 0, 5, 0, 0], [0, 5, 0, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 3, 0, 0, 9, 0], [0, 0, 0, 9, 0, 0, 0, 0, 4], [0, 0, 1, 0, 0, 7, 0, 0, 0] ] 
    ],
};

function generateSudoku() {
    const difficulty = document.getElementById('difficulty').value;
    const boards = sudokuBoards[difficulty];
    const board = boards[Math.floor(Math.random() * boards.length)];
    const boardContainer = document.getElementById('sudoku-board');
    
    boardContainer.innerHTML = ''; 

    board.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = '1';
            cell.value = value !== 0 ? value : '';
            cell.addEventListener('input', validateInput);
            boardContainer.appendChild(cell);
        });
    });
}

function validateInput(event) {
    const input = event.target;
    const value = input.value;
    if (!/^[1-9]$/.test(value)) {
        input.value = ''; 
    }
}

document.querySelector('button').addEventListener('click', generateSudoku);
