var majorityElement = function(nums) {
    let record = {}
    for(let elem of nums){
        if(record[elem]){
            record[elem]++;
        } 
        else record[elem] = 1
        if(record[elem] > (nums.length)/2) return elem
    }
};