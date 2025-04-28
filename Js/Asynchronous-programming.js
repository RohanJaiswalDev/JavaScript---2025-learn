
// Asynchronous Programming in JavaScript...

// Callbacks are one way to handle async.
// Promises are a better, cleaner way.
// Async/Await is an even cleaner syntax built on top of Promises.



// Callback - Example...
function getDate(callback){
    setTimeout(()=>{
        console.log("Got the data!");
        callback();
    }, 2000);
}
function processData(){
    console.log("Processing the data..");
}
getDate(processData);



// Promises - Example...
let getDate = new Promise ((resolve, reject)=> {
    let success =  true;            // try changing it to false to see reject!

    setTimeout(()=> {
        if(success){
            resolve("Data Resolved!");
        }
        else{
            reject("Data Rejected!");
        }
    }, 2000);
});

getDate                                 // Using the promise
    .then((data)=>{
        console.log(data);          // If resolved
    })
    .catch((error)=>{
        console.log(error);         // If rejected
    });

    


// Async/Await - Example...
function getData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Data Received!");
            callback();
        }, 2000);
    });
}
async function showData(){
    console.log("Waiting for the Data....");
    let data = await getData();
    console.log(data);
}
showData();