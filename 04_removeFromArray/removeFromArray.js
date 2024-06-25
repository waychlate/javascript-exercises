const removeFromArray = function(...args) {
    let numArray = args[0]
    let newArray = []

    for (v = 0; v < numArray.length; v++) {

        for (i = 1; i < args.length; i++) {
            if (numArray[v] === args[i]) {
                delete numArray[v]
            }
            
        }

    }
    for (const arr of numArray) {
        if (arr != undefined) {
            newArray.push(arr)
        }
    }

    return newArray
    
};

// Do not edit below this line
module.exports = removeFromArray;
