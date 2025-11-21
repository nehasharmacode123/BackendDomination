// Promises 

function connectToServer(){
    console.log("connecting to server...");

    return new Promise(function(resolve,rejct){
        setTimeout(function(){
            resolve("Hello server...");
            
        }, 2000)
    })
}

function getCourses(){
    console.log("getting courses...");
    
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(["course 1", "course 2", "course 3", "course 4"])
        }, 2000)
    })

}

connectToServer()
.then(function(response){
    console.log(response);

    return getCourses()
    
}) //resolve
.then(function(response){
    console.log(response);
    
})





// .catch() //reject



// asnyc await

// async function getCourses()[
//     await
// ]