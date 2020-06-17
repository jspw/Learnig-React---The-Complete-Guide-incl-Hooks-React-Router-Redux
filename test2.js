// spread 
const num = [1,2,3,4,5];
const newNum = [...num,0,0,0];
console.log(newNum)


const person = {
    name : "Shifat",
};

const nePer = {
    ...person,
    age : 28
}

console.log(nePer)


const filter = (...args) => {
    return args.filter(el => el === 1);
}


console.log(filter(1,2,3,4,5));


// destructuring

const n = [1,2,3,4,5];
[num1, ,num2] = n ;
console.log(num1,num2);

// {name} = {name :"Sania",age:22};



// reference 

const ps = {
    name : "shifat",
    age : 23,
};

const sec = ps //it just set the pointer on ps function

console.log(sec)

ps.name = "Sania";

console.log(sec) //though we change name from ps function it will chnage also  from sec functon as its using pointer


// really copy not reference! using spread

const shit  = {
    ...ps,
};

ps.name = "joga";

console.log(shit)

