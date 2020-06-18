//import {} from "/path to module"

class Student{
    constructor(name,email,age){
        this.name=name;
        this.email=email;
        this.age=age;
    }

    getDetails(){
        return "Name: "+this.name +"\nEmail: "+this.email+"\nAge: "+this.age;
    }
}

    let foo= new Student("Sanjay","xxy@abc.com",33);
    console.log(foo.getDetails());

