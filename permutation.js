function perm(inp){
    let original = inp.join('')
    let inpArr = inp.sort((a,b) => a-b)
    let perm = []
    perm.push(('' + inpArr[0] + inpArr[1] + inpArr[2]))
    perm.push(('' + inpArr[0] + inpArr[2] + inpArr[1]))
    perm.push(('' + inpArr[1] + inpArr[0] + inpArr[2]))
    perm.push(('' + inpArr[1] + inpArr[2] + inpArr[0]))
    perm.push(('' + inpArr[2] + inpArr[0] + inpArr[1]))
    perm.push(('' + inpArr[2] + inpArr[1] + inpArr[0]))
    for(let i=0;i<perm.length;i++){
        if(perm[i] > original){
            return perm[i].split('').map(Number)
        }
    }
    return inp
}

console.log(perm([ 1, 2, 3 ]))

// works but limited for only 3 digits permutation