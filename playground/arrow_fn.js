console.log("Hello Node..!!");
var numbers=[1,2,3,4,5];
var tripleValue=numbers.map((value)=>value*3);
console.log(tripleValue);

function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
    }
    
    ask(
    "Do you agree?", 
    ()=> alert("You agreed."),
    ()=>alert("You cancelled the execution.")
    );

