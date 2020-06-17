let name = "Shifat";
const age = 23;

console.log(name);
console.log(age);

name = "sania" ;
// age = 24;

console.log(name);
console.log(age);


const myfun = () =>{
    console.log("Hey Sania!");
}

myfun();

const f2 = (name) => {
    console.log("Hey "+name);
}

f2("shifat");

const fun3 = (name,age) => {
    console.log("Hey! i am " + name + " , i'm "+age + " years old.")
}

fun3("Sania",22)

class Human{
    constructor(gender){
        this.gender = gender;
    }
}


class Person{
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log("My name is " + this.name);
    };

}

const person = new Person("San");
person.printName();


class Student extends Human{
    constructor(name){
        super();
        this.name = name;

    };

    print () {
        console.log("Hello");
    };
}

const st = new Student("Shifat");
st.print();
console.log("Name : " + st.name + " Gender : " + st.gender)




// ES7

class Human2{
    gender = "gender";

    print = () =>{
        console.log("Hello");
    }
}

class bal extends Human2{
    name = name;
    printName = () =>{
        console.log("Fuck")
    }
}

const p = new bal("Shifat")
p.print()
p.printName()


