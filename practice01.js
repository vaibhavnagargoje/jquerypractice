// let num1 =-40_00_000/0
// let str ='vaibhav'

// let num=35345235354353535453534543545345353534353534n

// console.log(num+5n)


// // data types/////////////
// let mes="vaibhav \t \"nagargoje"
// let nickname='mauli'
// let fina= mes   
// console.log( mes+nickname);


// let user 
// console.log(typeof user)
// console.log(user)


// let num =6
// num=String(num)
// num ="1"
// num=Number(num)
// num=Boolean(num)
// console.log(num, typeof num)

// let x

// console.log(x, typeof(x))
// x=9
// console.log(x, typeof(x))
// x=x+""
// console.log(x, typeof(x))
// x=x-2
// console.log(x, typeof(x))

// x=!x
// console.log(x)

// let a="123 Vaibhav 44"
// console.log(a)
// // a=Number(a)
// console.log(a)

// a=parseInt(a)
// console.log(a)


// let x="2"
// let y=2

// let data = x ===y
// console.log(data);

// let num=String(34)
// let num1= Number( num);

// console.log(num,typeof num);
// console.log(num1,typeof num1)





// let num=6;
// num=num+ ""
// // console.log(typeof num)

// num = +num + 5
// console.log(num, typeof num)


// let human={
//     name:"vaibhav",
//     age:45,
//     cuty:"pune",
//     tech:{
//         laptop:"acer",
//         mobile:"realmi",
//         os:"android",
//         browser:"chrome",
//         }
//     }

// for (let key in human.tech){
//     console.log(human.tech[key]);
// }



// function greet(name){
//     return  'hello '+name;
// }

// let user ="vaibhav";
// console.log(greet(user));


// // let a= 5+6;
// let add=function(num1,num2){
//     return num1+num2;
// }
// let b =7;
// console.log(typeof b)
// console.log(typeof add, add(5,6))
// b=add;
// console.log(typeof b)


// function add(num1,num2,num3=6)
// {

//     return num1+num2+num3;
// }

// console.log(add(10,20,30))




//// arrow functions 

// let greet = (user)=>{
//     console.log("hello "+user);
//     return 1;
// }

// console.log(greet("Vaibhav"))


// let add=(num1,num2,num3)=>
// { if ((num1, num2, num3)>0){
//   return num1+num2+num3;}

//   else{ console.log("please enter +ve number");
// }}
// console.log(add(20,12,-12))









function getFastLaptop(laptop1,laptop2){

    if(laptop1.cpu>laptop2.cpu){
        console.log(laptop1)
    }
    else{
        console.log(laptop2)
    }
}

function comparePrise(laptop1,laptop2){

    if(laptop1.price > laptop2.price){
        console.log("laptop 1 is expensive than Other laptop prise is"+laptop1.price);

    }
    else{
        console.log("laptop 2 is expensive than other laptop price is "+laptop2.price);
    }
}

let laptop1={
    cpu:"i3",
    brand:"Apple",
    model: "Macbook pro",
    price:894,
    ram: "8gb",
    greet: function(){
        console.log("congratulation... you")
    },
    getconfig:function(){
      console.log(this.brand," ",this.model," ", this.price)   
    },

    
}

let laptop2={
    cpu : "i5",
    brand : "samsung",
    model : "galexy",
    price: 5009,
    ram :"4gb",
    compare: (other)=>{
        if(this.cpu>other.cpu){
            console.log(this)
        }
        else{
            console.log(other)
       }
    }
}



// laptop.greet()
// laptop.getconfig()
// laptop2.compare(laptop1)
comparePrise(laptop1,laptop2);
// getFastLaptop(laptop1,laptop2);