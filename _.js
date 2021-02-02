const _ = {

    clamp(number, low, high) {
        let clamp1 = Math.max(number, low);
        let clamp2 = Math.min(clamp1, high);
        return clamp2;
    },

    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;    
        };
        if(start > end) {
            let endData = end;
            end = start;
            start = endData;
        };
        if(number >= start && number < end) {
            return true;
        } else {
            return false;
        };
    },

    words(string) {
        let result = string.split(' ');
        return result;
    },

    pad(string, length) {
        if(length < string.length) {
            return string;
        };
        let lengthToAdd = length - string.length;
        if(lengthToAdd %2 == 0) {
            let n = lengthToAdd / 2;
            return ' '.repeat(n) + string + ' '.repeat(n);
        } else {
            return ' '.repeat(Math.floor(lengthToAdd / 2)) + string + ' '.repeat(Math.ceil(lengthToAdd/ 2))
        };
    },

    has(object, path) {
        if(object[path] != undefined) {
            return true;
        } return false;
    },

    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject = {originalValue : key};
        };
        return invertedObject;
    },

    findKey(object, func) {
        for (let key in object) {
            let value = object[key];
            let funcReturn = func(value);
            if(funcReturn) {
                return key;
            } else {
                return undefined;
            };
        };
    },

    drop(array, number) {
        if (number === undefined) {
            number = 1;
        };
        let newArray = array.slice(number);
        return newArray;
    },

    dropWhile(array, predicate) {
        let cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    }, 

    chunk(array, size) {
        if(size === undefined) {
            size = 1;
        };
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
    },
};




// Do not write or modify code below this line.
module.exports = _;