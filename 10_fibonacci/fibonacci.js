const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    if (num == 0) return 0;
    let a = 0;
    let b = 1;
    let c = 1;
    for (let i = 0; i < Number(num) - 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
