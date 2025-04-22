/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push([currentStr, currentNum]);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            const [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
};