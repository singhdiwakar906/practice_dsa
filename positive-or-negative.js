// positive or negative code

function positive_negative(val){
    if(val == 0 ) return 'zero'
    return val < 0 ? 'negative' : 'positive';
}

console.log("output =>", positive_negative(0));