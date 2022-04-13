const reverseString = function(text) {
    // let newText = '';
    // while(text)
    // {
    //     newText += text.charAt(text.length - 1);
    //     if (text.length > 1)
    //         text = text.substring(0, text.length - 1);
    //     else text = 0;
    // }
    // return newText;
    return text.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;