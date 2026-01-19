                //ARRAY//

                    //.........1.........//
                    //ARRAY//
// let fruit = ["mango", "orange", "carrot", "apple", "pomegranate"];


// for (let item of fruit) {
//     console.log(item);
// }


// fruit.push("papaya");


// fruit.pop();


// fruit.unshift("papaya");


// fruit.shift();

// console.log(fruit.includes("mango")); 


// console.log(fruit.indexOf("banana")); 


                            //.......2......//
                            //MAP//

// let nums=[2,4,6,10,20]

// let double=nums.map(n=>n*2)

// console.log(double)


                        //........3..........//
                        //FILTER//

// let result=nums.filter(n=>n>4)

// console.log(result)



                //4....//


        let numbers=[2,4,6,8]
let double=numbers.map(n=>n*2)
let result=numbers.filter(n=>n>4)
let number=[1,2,3,4,5]

const sum=number.reduce((total,current)=>{
    return total+current;
},0);
console.log(sum)

console.log(double)
console.log(result)