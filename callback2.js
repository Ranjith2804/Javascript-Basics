function sqaure(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function quad(n){
    return n*n*n*n;
}

function sumofsomething(a,b,fn)
{
    let c=fn(a);
    let d=fn(b);
    return c+d;
}

console.log(sumofsomething(2,3,sqaure));
console.log(sumofsomething(2,3,cube));
console.log(sumofsomething(2,3,quad));