var maximumSwap = function(num) {
    let digits = num.toString().split('');
    let last = new Array(10).fill(-1);

    for (let i = 0; i < digits.length; i++) {
        last[parseInt(digits[i])] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        for (let d = 9; d > parseInt(digits[i]); d--) {
            if (last[d] > i) {
                let temp = digits[i];
                digits[i] = digits[last[d]];
                digits[last[d]] = temp;
                return parseInt(digits.join(''));
            }
        }
    }

    return num;
};