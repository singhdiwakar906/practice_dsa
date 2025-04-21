var isValid = function(s) {
    if (s.length % 2 !== 0) return false; // Odd length strings can't be valid

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;
            let top = stack.pop();
            if (c === ')' && top != '('){
                return false
            } else if(c === '}' && top != '{'){
                return false
            } else if(c === ']' && top != '[') return false
        }
    }

    return stack.length === 0;
};