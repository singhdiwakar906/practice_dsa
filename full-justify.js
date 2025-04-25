/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0;

    while (i < words.length) {
        let lineWords = [];
        let lineLength = 0;

        while (i < words.length && lineLength + words[i].length + lineWords.length <= maxWidth) {
            lineLength += words[i].length;
            lineWords.push(words[i]);
            i++;
        }

        let line = '';
        let totalSpaces = maxWidth - lineLength;

        if (i === words.length || lineWords.length === 1) {
            line = lineWords.join(' ');
            line += ' '.repeat(maxWidth - line.length); 
        } else {
            let gaps = lineWords.length - 1;
            let spacesPerGap = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;

            for (let j = 0; j < lineWords.length - 1; j++) {
                line += lineWords[j];
                line += ' '.repeat(spacesPerGap + (j < extraSpaces ? 1 : 0));
            }
            line += lineWords[lineWords.length - 1]; 
        }

        result.push(line);
    }

    return result;
};
