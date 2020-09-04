const getName = (object) => {
    const { name } = object;
    return name;
}

function copyAndPush(array, pushNumber) {
    array.push(pushNumber);
    return array;
}

module.exports = {
    getName,
    copyAndPush
}