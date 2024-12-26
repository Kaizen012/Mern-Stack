//Function in JS

//Normal Function 

function add(a,b){
    console.log(a+b)
}
add(5,10)

//Arrow Function

const add1=(a,b) =>{
    console.log(a+b)
}
add1(5,10)
const showName = (name) => {
    console.log("Hello"+" "+name)
}
showName("MERN")

const myArray = [1,2,3,4,5]

for(let i=0;i<myArray.length; i++){
    console.log(myArray[i])
}

//Using JS Methods

//1.map

const newArr= myArray.map(item => item * 2)
console.log(newArr)

//2.Filter

const filteredArr = myArray.filter(item => item < 3)
console.log(filteredArr)

//3.