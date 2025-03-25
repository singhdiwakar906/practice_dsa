function sum(num){
    if( num == 0 ) return 0;
    return num + sum( num - 1 )
}

console.log("output => ", sum(40))

function sum_using_formula(num) {
    return ( num/2 )*( 1 + num )
}

console.log("output =>", sum_using_formula(0))