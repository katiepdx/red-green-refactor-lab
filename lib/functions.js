const getName = ((item, name) => {
    if (item.name === name) {
        return item.name;
    }
})

module.exports = {
    getName
}