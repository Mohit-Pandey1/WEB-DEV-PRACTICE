// for of

//["", "", ""]
// [{}, {}, {}]    ---> multiple objects inside an array

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hola amigos!!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}   

//Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("AUS", "Australia")
map.set("RU", "Russia")

console.log(map);


for (const [key, value] of map) {
    console.log(key, "-->", value);
    
}


const myObject = {
    game1 : "NFS",
    game2 : "Modern WarFare"
}


// for (const [key, value] of myObject) {      --> this will not work in this condition[can't print object using forof loop]
//     console.log(key, '~', value);
    
// }