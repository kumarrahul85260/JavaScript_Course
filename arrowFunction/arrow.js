const user = {
    name: "rahul",
    emp: "1270xxx",
    welcome: function () {
        console.log(`Hey ${this.name},welocme to code base`);
    }
}
user.welcome()
console.log(this);


const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3,4))

// implicite return 
const sum=(num1,num2)=>num1+num2
console.log(sum(4,8))

// in order to return a object use ()

const obj=(num)=>({
    name:"rk"
})

console.log(obj(3))