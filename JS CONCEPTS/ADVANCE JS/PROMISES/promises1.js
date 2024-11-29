//1st promises

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//2nd promises

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


//3rd promises
const proimseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mohit", email: "mohit@example.com"})
    }, 1000)
})

proimseThree.then(function(user){
    console.log(user);
})


//4th promises
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "M9", password: "21214"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected!!!");
    
})


//5th Promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javasript", password : "1224"})
        }
        else{
            reject('ERROR: Js Went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}
consumePromiseFive()