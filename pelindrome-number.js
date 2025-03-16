const checkPelindrome = (num) => {
    // using string
    // let string = num.toString()
    // let reverseString = string.split("").reverse().join("")
    // return string === reverseString

    // optimized
    // let string = num.toString()
    // let start = 0
    // let end = string.length-1
    // while(start < end){
    //     if(string[start] != string[end]) return false
    //     start++
    //     end--
    // }
    // return true

    // int more optimized and with lesser storage space
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // For odd-length numbers, discard the middle digit before comparison.
    return x === reversed || x === Math.floor(reversed / 10);
}

console.log(checkPelindrome(1217))