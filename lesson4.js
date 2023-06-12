const object={
    a:1,b:2,c:3
}
//for in use most when itereating objects
for(const item in object){
    console.log(`${item} -- ${object[item]}`);
}
// for of used mostly on arrays
const arra=[1,3,5,6]

for(const item of arra){
    console.log(`${item} `)
}

let obj={
    name:"Tebogo",
    age:30,
    home:"Morapalala"
}
for(const item in obj){
    console.log(`${item}----${obj[item]}`)
}