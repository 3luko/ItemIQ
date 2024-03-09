
const firstNameText = document.getElementById("firstNameText");
const lastNameText = document.getElementById("lastNameText");
var i = 1;





function dispName(){
    firstNameText.innerHTML = document.getElementById("fName").value;
    lastNameText.innerHTML = document.getElementById("lName").value;
}

function clearDiv(){ //clears boxes
    if(i > 1){
        let div = document.getElementById("inventoryContainer");
        div.replaceChildren();
        alert("slots will be cleared");
        i = 1;
    } else {
        alert("No slots have been created!");
    }
   
}

function createDiv(){ //creates boxes
    newObj = document.createElement("div");
    newObj.id = "slot" + i;
    newObj.style.backgroundColor = "red";
    newObj.style.vistibility = "show";
    newObj.innerHTML = "Slot " + i;
    document.getElementById("inventoryContainer").appendChild(newObj);
    alert("Slot " + i + " will be added");
    i++;
}