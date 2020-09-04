const getName = (object) => {
    const { name } = object;
    return name;
}

const copyAndPush = ((array, pushNumber) => {
    return newArray = [...array, pushNumber];
})

function capitalizeAndFilter(wordsList, startLetter) {
    let newWordsList = [];
    for (let i = 0; i < wordsList.length; i++) {
        const oneWord = wordsList[i];
        if (oneWord.charAt(0) !== startLetter) {
            newWordsList.push(oneWord);
        }
    }
    return newWordsList;
}

module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
}