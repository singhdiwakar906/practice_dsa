// an array of size 100 with all doors as close
// run a loop from 1 to 100 ,
// if val x then loop will run till 100 starting from 0 , moving x step each time and altering the door till cross 100
// wait till the end


let doors = []
let door = 0
let limit = 144

while(door < limit){
    doors.push(0)
    door++;
}
console.log("initial doors", doors);

let person = 0
while(person < limit){
    let at_door = person
    while(at_door < limit){
        doors[at_door] = !doors[at_door]
        at_door += person+1
    }
    person++;
}
console.log("final doors", doors);

for(i in doors){
    doors[i] && console.log("open door at", parseInt(i)+1)
}

// optimized solution solution 
console.log(">>>>>>>>>>>>>>")
let total_doors = limit
let open_door = 0
while(true){
    let open_door_square = (open_door+1)*(open_door+1)
    if(open_door_square > total_doors) break
    console.log("open door no", open_door_square)
    open_door+=1
}