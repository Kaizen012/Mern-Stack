// //Object in JS
// const myObj = {
//     name: 'Abc',
//     age: 20,
//     address: 'Lalitpur',
//     'college': 'National College of Engineering'
// }

// console.log(myObj.age)
// console.log(myObj.name)
// console.log(myObj['college'])

//Form Handling in JS

const nameInput = document.getElementById("nameInput")
const submitBtn = document.getElementById("SubmitBtn")
const todolist = document.getElementById("Todolist")
submitBtn.onclick = function() {
    const inputValue = nameInput.value 
    if(!inputValue.trim()){
        alert("Please enter a valid name.")
    }
    else{
        // displayName.textContent = Hello ${inputValue} //Tille operator `
        const list = document.createElement("li")
        list.textContent = inputValue
        todolist.appendChild(list)
        nameInput.value = ""  //clears out entering space after displaying it in a list
    }   //Trim eliminates white spaces from the input values

}