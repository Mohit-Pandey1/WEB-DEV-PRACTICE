// for-in loop

const myObject = {
    js : "Javascript",
    cpp : "C++",
    java : "java",
    python : 'py'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ['js', 'cpp', 'java', 'py']

for(const key in programming){
    console.log(programming[key]);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("AUS", "Australia")
// map.set("RU", "Russia")

// for (const key in object) {
    
// }