function setTimeoutPromise(ms: number){
    return new Promise(res => setTimeout(res, ms));
}

function callback(){
    console.log("HI");
}

setTimeoutPromise(3000).then(callback)