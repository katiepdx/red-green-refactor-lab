const getName = (object) => {
    const { name } = object;
    return name;
}

const copyAndPush = ((array, pushNumber) => {
    return newArray = [...array, pushNumber];
})

const capitalizeAndFilter = ((wordsList, startLetter) => {
    const filteredList = wordsList.filter((word) => {
        return word.charAt(0) !== startLetter;
    })
    return filteredList;
})


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
}