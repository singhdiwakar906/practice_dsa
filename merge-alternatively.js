var mergeAlternately = function(word1, word2) {
    let w_max = Math.max(word1.length, word2.length);
    let w1_len = word1.length;
    let w2_len = word2.length;
    let wc = 0;
    let output = '';
    while (w_max) {
        if (wc < w1_len) output += word1[wc];
        if (wc < w2_len) output += word2[wc];
        wc++;
        w_max--;
    }
    return output;
};

let word1 = "abcdef";
let word2 = "pqr";

let result = mergeAlternately(word1, word2);
console.log("Merged String:", result);
