const getName = (object) => {
    const { name } = object;
    return name;
}

function copyAndPush(array, pushNumber) {
    const newArray = [...array, pushNumber];
    return newArray;
}

module.exports = {
    getName,
    copyAndPush
}