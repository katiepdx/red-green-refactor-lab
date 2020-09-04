// Import functions
const { getName } = require('./functions.js');

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