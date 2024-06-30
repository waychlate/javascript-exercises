const palindromes = function (string) {
    let illegal = ["!", ".", ",", "?", " "];
    return (string.toLowerCase().split('').filter(char => !illegal.includes(char)).join('') == string.toLowerCase().split('').filter(char => !illegal.includes(char)).reverse().join(''))
};

// Do not edit below this line
module.exports = palindromes;
