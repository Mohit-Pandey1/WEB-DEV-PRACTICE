const coding = ['js', 'ruby', 'cpp', 'py', 'php', 'java']

// coding.forEach( function (val){
//     console.log(val);
// } )


//using arrow() in foreach
// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})