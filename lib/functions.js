const fetch = require('node-fetch');

const getName = (object) => {
    const { name } = object;
    return name;
};

const copyAndPush = ((array, pushNumber) => {
    return [...array, pushNumber];
});

const capitalizeAndFilter = ((wordsList, startLetter) => {
    const filteredList = wordsList.filter((word) => {
        return word.charAt(0) !== startLetter;
    });
    return filteredList;
});

const fetchQuote = async(name) => {
    const response = await fetch(`http://futuramaapi.herokuapp.com/api/characters/${name}`);
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomElement = data[randomIndex];
    return randomElement;
};


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
    fetchQuote
};
