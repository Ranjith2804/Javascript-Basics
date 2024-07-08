const user='{"name":"Ranjith","age":"19"}';
const a=JSON.parse(user);
console.log(a)//prints as Object coz converts string into a object
console.log(a["name"])

const user2={
    name:"Ranjith",
    age:19
}
const b=JSON.stringify(user2);
console.log(b)//prints as String cause converts object into a String
console.log(b["name"])//it will be undefined coz it is a String (b).

