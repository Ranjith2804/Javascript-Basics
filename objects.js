//Objects l={1:"xx",2:"yy"};
//here [{},{},{}] inside array objects are used

const allusers=[{name:"Ranjith",gender:"Male"},{name:"Vimu",gender:"Female"}];

for(let i=0;i<allusers.length;i++)
    {
        if(allusers[i]["gender"]=="Female"){
            console.log(allusers[i]["name"]);
        }
    }