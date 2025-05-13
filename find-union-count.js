class Solution {
    // Function to return the count of number of elements in the union of two arrays.
    findUnion(a, b) {
        let count = 0;
        let track = {}
        for(const elem of a ){
            if(track[elem]) continue;
            else {
                track[elem] = true
                count++
            }
        }
        for(const elem of b ){
            if(track[elem]) continue;
            else {
                track[elem] = true
                count++
            }
        }
        return count
    }
}