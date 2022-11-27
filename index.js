

// 1st Use an Array to Store a Collection of Data

//Complete the statement by assigning an array of at least 5 
//elements in length to the array variable. 
//Your array should contain at least one string, 
//one number, and one boolean.

const one = [
    [
        {
            one: 1,
            two: 2
        },
        {
            greet: "Hello",
            farewell: "Bye"
        }
    ],
    "String",
    2022,
    {
        boolean: true
    }
]

//2nd Access an Array's Contents Using Bracket Notation

//In order to complete this challenge, set the 2nd position 
//(index 1) of an array to anything you want, besides the letter
// b.

const two = ["a", 1, "b", 2]

two[1] = "Not a number anymore"
two[2] = 2022


//3rd Add Items to an Array with push() and unshift()

//We have defined a function, mixedNumbers, 
//which we are passing an array as an argument. 
//Modify the function by using push() and unshift() 


const three = (array) => {
    array.push("End of the test", 2022)
    array.unshift("Hello")
    return array
}

//4th Remove Items from an Array with pop() and shift()

//Modify the function, using pop() and shift()

const four = (array) => {
    let popped = array.pop()
    let shifted = array.shift()
    return array
}

//5th Remove Items Using splice()

//Use splice() to remove elements from an array

const five = ["success", 42, "hello", 2022, "test", "success"]

five.splice(1,4)


// 6th Add Items Using splice()

//Modify the function using splice() to remove the first 
//two elements of the array and add 'DarkSalmon' and 
//'BlanchedAlmond' in their respective places.

const six = (array) => {
    const startIndex = 3
    const amountToDelete = 2
    array.splice(startIndex, amountToDelete, "Success", "Success")
    return array
}

//7th Copy Array Items Using slice()

//Modify the function using slice() to extract information from the argument array and 
//return a new array.

//IMPORTAN TO ASK ANDRES ABOUT THE INDEXES IN THIS PARTICULAR CASE**********************************

const seven = (array) => {
    const newArray = array.slice(2,4)
    return newArray
}

let test = [kjdfkjdf,ksdjjs,4,8,hghghg]
// 8th Copy an Array with the Spread Operator

//copy an array using spread operator

const eight = (array) => {
    let newArray = []
    newArray.push([...array, {test: "Success"}])
    return newArray
}


//9th Combine Arrays with the Spread Operator

//use spread operator to conbine two arrays

const nine = () => {
    const array = ["SUCCESS", "SUCCESS"]
    const newArray = ["hello", ...array, "what's up", "bye"]
    return newArray
}

//10th Check For The Presence of an Element With indexOf()

//Define a function, that takes an array and an 
//element as arguments. Modify the function using indexOf() so that it returns 
//true if the passed element exists on the array, and false if it does not.

const ten = (array, element) => {
    if (array.indexOf(element) >= 0){
        return true
    } else {
        return false
    }
}

//11th Iterate Through All an Array's Items Using For Loops

//IMPORTANT TO ASK ANDRES ABOUT THE INDEXES IN THIS PARTICULAR CASE**********************************


const eleven = (array, element) => {
    let newArray = []
    for(let i = 0; i < array.length; i++)
    if (array[i].indexOf(element) == -1){
         newArray.push(array[i])
    } 
    return newArray
}

//12th Create complex multi-dimensional arrays

const twelve = [
    "first",
    [
        "second",
        [
            "third"
        ]
    ],
    [
        "second",
        [
            "third",
            [
                "fourth",
                [
                    "fifth"
                ]
            ]
        ]

    ]
]

// 13th Add Key-Value Pairs to JavaScript Objects

const thirteen = {
    Name: "Luis",
    Lastname: "Moguea"
}

thirteen.age = 27
thirteen["Marital status"] = "Single"
const city = "Current City"
thirteen[city] = "Medellin-Antioquia"


// 14th Access Property Names with Bracket Notation

//const dataTest = {hola: "hola", chao: "chao", edad: 32, frase: "thanks"}
const fourteen = (Items) => {
    return dataTest[Items]
}


//15th Use the delete Keyword to Remove Object Properties

//const dataTest = {hola: "hola", chao: "chao", edad: 32, frase: "thanks"}

delete dataTest.chao 
delete dataTest.edad
delete dataTest.hola

//16th Check if an Object has a Property

//IMPORTANT TO ASK ANDRES ABOUT THE INDEXES IN THIS PARTICULAR CASE**********************************

const DATA = {hola: "hola", chao: "chao", edad: 32, frase: "thanks"};

DATA.hasOwnProperty("edad");

"edad" in DATA

//17th Iterate Through the Keys of an Object with
// a for...in Statement


const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }

  users.Freddy = {
    online: true
  }

  users.Carl = {
    online: false
  }

const seventeen = (userObj) => {
    let result = 0 
    for(let user in userObj){
        if(userObj[user].online === true){
            result++
        }
    }
    return result
}

for(let user in users){
   // console.log(user)
}


//18th Generate an Array of All Object Keys with Object.keys()

Object.keys(users)

//console.log(Object.keys(users))

//19th Modify an Array Stored in an Object

const user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };

  const nineteen = (userObj, friend) => {
    userObj.data.friends.push(friend)
    return userObj.data.friends
  }

  console.log(nineteen(user, "LUIS SUCCESS"))

