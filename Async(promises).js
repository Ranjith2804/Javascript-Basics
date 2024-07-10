function mysettimeout(duration){
    let p=new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;
}

const a=mysettimeout(1000);
a.then(function(){
    console.log("Hi using async func by promises");
});
