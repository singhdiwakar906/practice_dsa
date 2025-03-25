var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let record = new Array(n * n + 1).fill(false);
    let duplicate = null, missing = null;

    // Iterate over the grid without using .flat()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let val = grid[i][j];

            if (record[val]) {
                duplicate = val;  // Found duplicate
            } else {
                record[val] = true;
            }
        }
    }

    // Find missing value in the same loop
    for (let i = 1; i <= n * n; i++) {
        if (!record[i]) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};
