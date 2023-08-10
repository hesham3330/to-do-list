var items=[]

// create a function to collect user input
function collectUserInput(){
    var userInput=document.getElementById("user__input")
    console.log(userInput)
    var addBut=document.getElementById("add")
    console.log(addBut)
    addBut.addEventListener("click", function(e){
        e.preventDefault();
        console.log(userInput.value)
        items.push(userInput.value)
        console.log(items)
        itemNumber(items)
        return userInput.value
    })
}
// call the function
collectUserInput()
console.log(items)

//create a function to add item number
function itemNumber(arr){
    for(item of arr){
        console.log(arr.indexOf(item) + 1)
        return arr.indexOf(item) + 1
    }
}

// create a functio to get date
function getDate(){
    var date = new Date()
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}
//getDate()

//create a function to get time
function getTime(){
    var date=new Date()
    var hrs=(date.getHours() < 10)? `0${date.getHours()}`:date.getHours()
    var mins=(date.getMinutes() < 10)?`0${date.getMinutes()}`:date.getMinutes()
    var secs=(date.getSeconds() < 10)?`0${date.getSeconds()}`:date.getSeconds()
    console.log(`${hrs}:${mins}:${secs}`)

}

function removeItem(){
    var butt=document.createElement("button")
    butt.textContent="X"
    var err=document.getElementById("err")
    err.appendChild(butt)
    butt.addEventListener("click", function(){
        var hd=document.getElementById("hd")
        hd.remove()
    })
}

removeItem()

function confirm(){
    var confirmButt=document.createElement("button")
    confirmButt.textContent="pending.."
    confirmButt.className="cnfrm" 
    var err=document.getElementById("err")
    err.appendChild(confirmButt)
    confirmButt.addEventListener("click", function(){
        console.log("working!!")
        confirmButt.classList.toggle("confirmed")
        confirmButt.classList.contains("confirmed")?confirmButt.textContent="Confirmed":confirmButt.textContent="pending.."

    })

}

confirm()

