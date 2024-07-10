function mysettimeout(fn,duration){
    setTimeout(fn,duration);
}

mysettimeout(function(){console.log("Hi there");
},2000);
