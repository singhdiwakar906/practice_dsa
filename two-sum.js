const twoSum = function(nums, target) {

    // brute force
    // let start = 0
    // while(start<nums.length-1){
    //     let end = start +1 ;
    //     while(end < nums.length){
    //         if( nums[start] +nums[end] == target){
    //             return [start, end]
    //         }
    //         end++;
    //     }
    //     start++;
    // }

    // using hash table
    let hashtable = {}
    for(i in nums){
        hashtable[nums[i]] = parseInt(i)
    }

    let start = 0
    while(start<nums.length-1){
        let targetValue = target - nums[start]
        if(hashtable[targetValue] && hashtable[targetValue] != start){
            return [start, hashtable[targetValue]]
        }
        start++;
    }
};

console.log(twoSum([2,7,11,15], 9))