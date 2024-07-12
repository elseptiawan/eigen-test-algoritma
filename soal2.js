const findLongestWord = (sentence) => {
    const splitSentence = sentence.split(' ')
    let longestWord = splitSentence[0]

    splitSentence.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })

    return longestWord
}

const sentence = "Saya sangat senang mengerjakan soal algoritma"
const longestWord = findLongestWord(sentence)
console.log(longestWord)