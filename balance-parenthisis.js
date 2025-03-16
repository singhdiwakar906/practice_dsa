var isValid = function(s) {
    // If the length of the string is odd, it can't be a valid bracket sequence
    if (s.length % 2 !== 0) return false; 

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i]; // Current character in the string

        // If it's an opening bracket, push it onto the stack
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            // If stack is empty, there’s no matching opening bracket
            if (stack.length === 0) return false;

            let top = stack[stack.length - 1]; // Peek the top element without popping

            // Check if the top element matches the current closing bracket
            if ((c === ')' && top === '(') ||
                (c === '}' && top === '{') ||
                (c === ']' && top === '[')) {
                stack.pop(); // Valid pair found, remove the opening bracket from stack
            } else {
                return false; // Mismatch found, string is invalid
            }
        }
    }

    // If the stack is empty, all brackets were matched properly
    return stack.length === 0;
};
