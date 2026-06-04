const permutations = function(arr, index= 0, res = []) {
    if (index == arr.length) {
        res.push([...arr]);
        return res;
    }

    for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        permutations(arr, index + 1, res);
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }

    return res;
};

// Do not edit below this line
module.exports = permutations;
