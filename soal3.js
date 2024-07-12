const intersectValue = (query, input) => {
    let output = []
    for (let i=0;i<query.length;i++) {
        output[i] = 0
        for (let j=0;j<input.length;j++) {
            if (query[i] == input[j]) {
                output[i]++
            }
        }
    }

    return output
}

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']
const output = intersectValue(query, input)
console.log(`OUTPUT = [${output}]`)