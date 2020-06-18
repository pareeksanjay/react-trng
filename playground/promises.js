/* //producer code
var promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Here comes the data..!!");
        reject(new Error("Something bad happened.."))
    },3000);

//depending on the condition, we can resolve and reject both

});


//consumer code
promise.then(
(response) => console.log("Success Response: ",response),
(err)=>console.log("error response: ",err)
) */

function delay(ms) {
    if(ms>2000){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },ms)
    });
}
else{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Less Time"));
        },ms)
    });
    //return reject(new Error("Less Time"));
}
   }
   
   delay(3000).then(() => console.log('runs after 3 seconds'));