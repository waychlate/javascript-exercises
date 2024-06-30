const findTheOldest = function(array) {
    let sorted = array.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (isNaN(aAge)) aAge = 2024 - a.yearOfBirth;
        if (isNaN(bAge)) bAge = 2024 - b.yearOfBirth;
        console.log(aAge + ' ' + bAge)

        return (bAge) - (aAge);
    })
    
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
