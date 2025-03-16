var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";  // If the array is empty, return an empty string.

    let prefix = strs[0]; // Start with the first string as the initial prefix.

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Check if prefix exists at the start of strs[i]
            prefix = prefix.substring(0, prefix.length - 1); // Reduce the prefix one character at a time.
            if (prefix === "") return ""; // If prefix becomes empty, return immediately.
        }
    }

    return prefix;
};
