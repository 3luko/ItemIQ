
const firstNameText = document.getElementById("firstNameText");
const lastNameText = document.getElementById("lastNameText");
var slotNum = 0;
var showingMenu = false;
var nameSubmittion = 0;

function dispName(){ //displays the first and last name of the user.
    firstNameText.innerHTML = document.getElementById("fName").value;
    lastNameText.innerHTML = document.getElementById("lName").value;
}

function clearDiv(){ //clears boxes
    if(slotNum == 0){
        alert("No slots have been created!");
    } else {
        alert("No slots have been created!");
        let div = document.getElementById("inventoryContainer");
        div.replaceChildren();
        alert("slots will be cleared");
        slotNum = 1;
    }
   
}

function createDiv(){ //creates the slots that show what the user inputed in the menu div
    newObj = document.createElement("div");
    newObj.id = "slot" + slotNum;
    newObj.style.backgroundColor = "red";
    newObj.style.vistibility = "show";
    newObj.innerHTML = "Slot " + slotNum;
    document.getElementById("inventoryContainer").appendChild(newObj);
    alert("Slot " + slotNum + " will be added");
    slotNum++;
}

function createMenu(){ //Will create slots with information from the menu 

}

function clearMenu(){ //will clear the menu box on submittion.
    document.getElementById("quickMenu").style.display = "none";
    showingMenu = false;
    alert("Menu will be cleared!");
}

function submitMenu(){ //will submit and call the clearMenu() method to clear the menu for the slots
    document.getElementById("quickMenu").style.display = "none";
    showingMenu = false;
    alert("Menu Submitted!")
}

function showMenu(){
    if(!showingMenu){
        document.getElementById("quickMenu").style.display = "block"
        alert("Now showing the Menu!");
        showingMenu = true;
    } else { //if showing menu is already open 
        alert("Menu is Open!");
    }
    
}

function firstLastSub(){
    let first = document.getElementById("fName").value;
    let last = document.getElementById("lName").value;
    if(first != "" && last != ""){
        document.getElementById("fName").style.display = "none";
        document.getElementById("lName").style.display = "none";
        document.getElementById("createNclear").style.display = "block";
        document.getElementById("firstNLastButton").style.display = "none";
        alert("Hello " + first + " " + last + "!");
        return true;
    } else {
        alert("Please enter your first and last name.");
        return false;
    } 
}
