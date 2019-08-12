/**
 * Strategy:
 * loop over length of string, and for each '(' and ')', push it to memory
 * If memory is empty return true, if memory has one element, return false
 * If memory has more than one, then see if elements are alternatiing in the 
 * correct fashion
 */



var testString = '(asfasf)afasf(asfasfas)asfasfasasfasfasf()';
const memory = [];


const isvalid = () => {
    return tester(getValidCharacters(testString));
};

const getValidCharacters = (string) => {
    for (var i = 0; i <= string.length; i++) {
        if (string[i] === '(' || string[i] === ')') {
            memory.push(string[i]);
        }
    }

    return memory;
};

const tester = (array) => {

    if (array.length === 0) {
        return true;
    }

    if (array.length === 1) {
        return false;
    }

    if (array[0] !== '(' || array[1] !== ')') {
        return false
    }

    return tester(array.slice(2, array.length))
};

console.log(isvalid())