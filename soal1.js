const reverse = (word) => {
    const letters = word.match(/[a-zA-Z]+/g).join('');
    const numbers = word.match(/\d+/g).join('');

    const reversedLetters = letters.split('').reverse().join('');

    return reversedLetters + numbers
}

const plantString = "NEGIE1"
const reversedString = reverse(plantString)
console.log(reversedString)