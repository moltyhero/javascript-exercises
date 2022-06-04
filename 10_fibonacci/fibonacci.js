const fibonacci = function(num) {
    if (num < 0)
        return "OOPS";
    let first = 1;
    let second = 1;
    let temp;
    for (let i = 3; i <= num; i++) {
        temp = second;
        second += first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
