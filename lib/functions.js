const getName = (object) => {
    const { name } = object;
    return name;
}

const copyAndPush = ((array, pushNumber) => {
    return newArray = [...array, pushNumber];
})

function capitalizeAndFilter(wordsList, startLetter) {
    let newWordsList = [];
    wordsList.map((word) => {
        if (word.charAt(0) !== startLetter) {
            newWordsList.push(word);
        }
    })
    return newWordsList;
}

module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
}