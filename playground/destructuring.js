
//Array Destructuring
let arr=["foo","bar","baz","bam"];
let [f1,f2,f3,f4,f5]=arr;

console.log(f2);

//Object Destructuring

let draw ={
    drawCircle : r=> console.log(Math.PI*r*r),
    drawText : text=> console.log("Drawing "+Text),
    drawRect : (w,l)=> console.log(w*l)
}

let{drawText:dt,drawCircle:dc}=draw;

dc(3);

//Nested Destructuring

let user={
    firstName:"Sanjay",
    lastName:"Pareek",
    address:{
        city:"Hyd",
        street:"Anjaiah Nagar"
    },
    friends:["x","y","z"]
}
let todos=[
    {label:"plant",status:true},
    {label:"shop",status:true},
    {label:"read",status:true},
]

let {firstName:fn,lastName:ln,address:{
    city:ct,street:st
}}=user
console.log(fn,ln);