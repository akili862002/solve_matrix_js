var matrix;

function createInputElements(matrix) {
    let inputs = document.querySelector(".input-matrix");
    inputs.innerHTML = '';

    let { m, n } = getSize(matrix);

    for (let i = 0; i < m; i++) {
        let ul = document.createElement('ul');
        for (let j = 0; j < n; j++) {
            let block = document.createElement('div');
            block.classList.add("block");

            let input = document.createElement('input');
            input.classList.add(`item-${i}-${j}`);
            block.append(input);

            ul.append(block);
        }
        inputs.append(ul);
    }
}

function createFormMatrix() {
    let rows = Number.parseInt(document.querySelector(".get-size-rows").value);
    let columns = Number.parseInt(document.querySelector(".get-size-columns").value);

    // Create matrix with size: rows x columns
    matrix = createMatrixArray(rows, columns);

    createInputElements(matrix);
}

function createMatrix() {
    let { m, n } = getSize(matrix);

    let mt = createMatrixArray(m, n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let inp = document.querySelector(`.item-${i}-${j}`);
            let value = Number.parseInt(inp.value) || null;

            mt[i][j] = value;
        }
    }

    
    matrix = mt;
    console.log(matrix);
}