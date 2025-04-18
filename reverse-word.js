var reverseWords = function(s) {
    let i = s.length - 1;
    let res = '';
    
    while (i >= 0) {
        
        while (i >= 0 && s[i] === ' ') i--;
        if (i < 0) break;

        let j = i;
        while (i >= 0 && s[i] !== ' ') i--;

        let word = '';
        for (let k = i + 1; k <= j; k++) {
            word += s[k];
        }

        if (res.length > 0) res += ' ';
        res += word;
    }

    return res;
};
