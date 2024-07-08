function sumd(a,b,val){
    if(val=="add")
        {
            return a+b;
        }
    if(val=="diff")
        {
            return a-b;
        }
}

let x=sumd(10,6,"add");
console.log(x);

//Callback


function abb(a,b,func)
{
    func(a+b);
}
function disp(a)
{
    console.log(a);
}

abb(10,10,disp);//here disp is function passed as a argument to anothyer function 