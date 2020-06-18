//Rest operator
/* function demo(name,...args){
    console.log(args[0]);
}
//demo("Args");
demo("Args","abc@abc.com",20); */

//Spread (...)

let arr=["foo","bar","baz"];
let newArr1=["Bazzz",...arr];
let newArr2=["Bazzz",arr];
console.log(newArr1,newArr2);


