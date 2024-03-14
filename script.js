
const firstNameText = document.getElementById("firstNameText");
const lastNameText = document.getElementById("lastNameText");
var slotNum = 0;
var showingMenu = false;
var biggershoeName;
var biggershoeSize;
var biggershoePrice;

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
        slotNum = 0;
    }  
}

function createDiv(){ //creates the slots that show what the user inputed in the menu div
    newObj = document.createElement("div");
    
    newObj.id = "slot" + slotNum;
    newObj.style.backgroundColor = "limegreen";
    newObj.style.vistibility = "show";
    newObj.style.border = "1px solid black";
    document.getElementById("shoeName").value = "";
    document.getElementById("shoeSize").value = "";
    document.getElementById("shoePrice").value = "";
    newObj.innerHTML = (slotNum + 1) + ".<span style='margin-left : 4em'>" + biggershoeName + "</span><span style='margin-left : 4em'>Size " + biggershoeSize + "</span><span style='margin-left : 5em'>$" + biggershoePrice + "</span>";
    document.getElementById("inventoryContainer").style.display = "block";
    document.getElementById("inventoryContainer").appendChild(newObj);
    alert("Slot " + (slotNum + 1) + " will be added");
    slotNum++;
}

function clearMenu(){ //will clear the menu box on submittion.
    document.getElementById("quickMenu").style.display = "none";
    showingMenu = false;
    document.getElementById("shoeName").value = "";
    document.getElementById("shoeSize").value = "";
    document.getElementById("shoePrice").value = "";
    alert("Menu will be cleared!");
}

function submitMenu(){ //will submit and call the clearMenu() method to clear the menu for the slots
    document.getElementById("quickMenu").style.display = "none";
    showingMenu = false;
    biggershoeName = document.getElementById("shoeName").value;
    biggershoeSize = document.getElementById("shoeSize").value;
    biggershoePrice = document.getElementById("shoePrice").value;
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
        alert("Welcome " + first + " " + last + "!");
        return true;
    } else {
        alert("Please enter your first and last name.");
        return false;
    } 
}