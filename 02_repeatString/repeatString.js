const repeatString = function(text, times) {
    let finalText = ''
    for (let i = 0; i < times; i++) {
        finalText += text;
    }
    if (times<0) return "ERROR"
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
