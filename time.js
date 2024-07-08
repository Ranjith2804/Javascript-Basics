function cal(){
    let a=1;
    for (let i=0;i<10;i++)
        {
            a=a+i;
        }
    return a
}
const btimee= new Date();
console.log(cal());
const atimee= new Date();
console.log(atimee-btimee);
//this is to calculate time taken to run the func cal in millisec