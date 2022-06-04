const palindromes = function (sentence) {
    let temp = sentence.toLowerCase();
    let regex = /\W+/g;
    temp = temp.replace(regex, '');
    temp = temp.split("");
    for (let i = 0, j = temp.length-1; i < j; i++, j--) {
        if (temp[i] != temp[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
