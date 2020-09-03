// Import functions
const { getName } = require('./functions.js');

const dogs = { name: 'spot', age: 5, weight: '20 lbs' }
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

// getName test
describe('getName function', () => {
    it('finds the name passed in to the function', () => {
        const dogNameMatch = getName(dogs, 'spot');
        const characterNameMatch = getName(character, 'Aang')

        expect(dogNameMatch)
            .toEqual('spot');

        expect(characterNameMatch)
            .toEqual('Aang');
    });
});