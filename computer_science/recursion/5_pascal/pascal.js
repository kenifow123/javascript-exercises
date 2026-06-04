const pascal = function(n, prev = [1]) {
    if (n === 1) {
        return prev;
    }
    let curr = [];
    curr.push(prev[0]);
    for (let i = 1; i < prev.length; i++) {
        curr.push(prev[i - 1] + prev[i])
    }

    curr.push(prev[prev.length - 1]);
    return pascal(n - 1, curr);

};
  
// Do not edit below this line
module.exports = pascal;
