const contains = function(obj, find) {
    const values = Object.values(obj);
    if (values.includes(find)) return true;

    const nestedObjs = values.filter(
        value => typeof value === 'object' && value !== null
    );

    return nestedObjs.some(nestedObj => contains(nestedObj, find) === true);
};

  
// Do not edit below this line
module.exports = contains;
