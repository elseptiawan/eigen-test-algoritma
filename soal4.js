const subDiagonal = (matrix) => {
    let firstDiagonal = 0
    let secondDiagonal = 0
    let lastIndex = matrix.length - 1
    for (let i=0;i<matrix.length;i++) {
        if (matrix[i].length != matrix.length) {
            return "Matrix must be NxN matrix"
        }
        firstDiagonal += matrix[i][i]
        secondDiagonal += matrix[i][lastIndex]
        lastIndex--
    }

    const result = firstDiagonal - secondDiagonal
    return `Hasil = ${result}`
}

const matrix = [
    [1,2,0],
    [4,5,6],
    [7,8,9]
]
const result = subDiagonal(matrix)
console.log(result)