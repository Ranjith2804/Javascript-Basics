let ages=[18,16,20,21,23,22];
ages.sort();
for (let i=0;i<ages.length;i++)
    {
        console.log(ages[i]);
        if(ages[i]<20){
            console.log("Ur under 20 and ur age is "+ages[i]);
        }
    }