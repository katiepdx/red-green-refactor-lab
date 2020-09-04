const getName = (object) => {
    const { name } = object;
    return name;
}

const copyAndPush = ((array, pushNumber) => {
    return newArray = [...array, pushNumber];
})

module.exports = {
    getName,
    copyAndPush
}