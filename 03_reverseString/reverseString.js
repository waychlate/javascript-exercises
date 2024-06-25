const reverseString = function(string) {
    let returnedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        let char = string[i]
        returnedString += char;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = reverseString;
