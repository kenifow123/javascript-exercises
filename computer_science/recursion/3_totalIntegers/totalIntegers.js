const totalIntegers = function(obj) {
    let nestedObjs;
    let count = 0;

    if (typeof obj === 'object' && obj !== null) {
        nestedObjs = Object.values(obj);
    } else {
        return;
    }

    for (const el of nestedObjs) {
        if (Number.isInteger(el)) {
            count++;
        } else if (typeof el === 'object' && el !== null) {
            count += totalIntegers(el);
        }
    }

    return count;

};

// Do not edit below this line
module.exports = totalIntegers;
