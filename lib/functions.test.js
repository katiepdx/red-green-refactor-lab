// Import functions
const { getName, copyAndPush, capitalizeAndFilter, fetchQuote } = require('./functions.js');

const dog = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

// getName test
describe('getName function', () => {
    it('returns the name from object', () => {
        const dogName = getName(dog);
        const characterName = getName(character);

        expect(dogName)
            .toEqual('spot');

        expect(characterName)
            .toEqual('Aang');
    });
});

//copyAndPush test
const numbers = [1, 2, 3];

describe('copyAndPush function', () => {
    it('returns a copy of the new array with a number pushed on to the end', () => {
        const newArray = copyAndPush(numbers, 4);

        expect(newArray)
            .toEqual([1, 2, 3, 4]);
    });
});

describe('copyAndPush function', () => {
    it('checks that the original array remains unchanged', () => {

        expect(numbers)
            .toEqual([1, 2, 3]);
    });
});

//capitalizeAndFilter test
const wordsList = ['apple', 'banana', 'cat', 'dog', 'frog', 'fishy', 'flamingo'];

describe('capitalizeAndFilter function', () => {
    it('capitalizes all the words and removes words that start with the letter f', () => {
        const newWordsList = capitalizeAndFilter(wordsList, 'f');

        expect(newWordsList)
            .toEqual(['apple', 'banana', 'cat', 'dog']);
    });
});


// fetch a single quote from API
describe('fetchQuote function', () => {
    it('fetches a single quote from the API', async () => {
        const singleQuote = await fetchQuote('zapp-brannigan');

        expect(singleQuote)
            .toEqual({
                character: singleQuote.character,
                quote: singleQuote.quote,
                image: singleQuote.image

            });
    });
});


