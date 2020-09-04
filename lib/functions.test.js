// Import functions
const { getName, copyAndPush } = require('./functions.js');

const dog = { name: 'spot', age: 5, weight: '20 lbs' }
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

// getName test
describe('getName function', () => {
    it('returns the name from object', () => {
        const dogName = getName(dog);
        const characterName = getName(character)

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