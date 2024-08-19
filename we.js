let magg = document.getElementById("mag")

let btn = document.getElementsByClassName('gre')[0]


btn.addEventListener('click', flin)

function flin(event) {
let btnClicked = event.target
magg.style.right = "75%"

btnClicked.style.display = "none"
 
}


// const human = {}

// human.age = 40
// human.height = 60


// human.parts = function () {
//     return this.height + " " +  this.age
// }

const human = {
    age :10,
    height : 60,
    head : {
        eyeColor :"blue",
        nose: "wide",
        mouth: "small"
    },
    parts : function () {
    return this.height + " " +  this.age
    }

}

human.gender = "Female"
human.name = "Shola"

human.age = 24

console.log("My height is "+ human.height +"feet")

console.log("i am "+ human["age"] +"year old")

console.log(human.name +" is a " + human.gender + " and she is " + human["age"] +"year old")


let doni = Math.pow(2, 4)

console.log(doni)
