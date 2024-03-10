
const firstNameText = document.getElementById("firstNameText");
const lastNameText = document.getElementById("lastNameText");
var slotNum = 1;
var menuNum = 1;

function dispName(){
    firstNameText.innerHTML = document.getElementById("fName").value;
    lastNameText.innerHTML = document.getElementById("lName").value;
}

function clearDiv(){ //clears boxes
    if(slotNum > 1){
        let div = document.getElementById("inventoryContainer");
        div.replaceChildren();
        alert("slots will be cleared");
        slotNum = 1;
    } else {
        alert("No slots have been created!");
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

function createMenu(){ //creates the Menu div using innerHTML, 
    if(menuNum > 1){
        alert("Sike!");
    } else {
        shoeInput = document.createElement("div");

    shoeInput.style.vistibility = "show";
    shoeInput.id = "quickMenu" + menuNum;

    shoeInput.innerHTML = "<br>";
    shoeInput.innerHTML += "<input type='text' id='shoeName' placeholder='Name of Shoes'></input>";
    shoeInput.innerHTML += "<br>";
    shoeInput.innerHTML += "<input type='number' id='shoeSize' placeholder='Size of Shoes'></input>";
    shoeInput.innerHTML += "<br>";
    shoeInput.innerHTML += "<input type='number' id='shoePrice' placeholder='Price of shoes'></input>";
    shoeInput.innerHTML += "<br>";
    shoeInput.innerHTML += "<button type='button' id='submitMenu' onclick='submitMenu()'>Submit Slot</button>";
    shoeInput.innerHTML += "<button type='button' id='clearMenu' onclick='clearMenu()'>Clear Menu</button>";
    
    
    document.getElementById("mainDiv").appendChild(shoeInput);
    alert("Opening Menu for Shoe Information!");
    menuNum++;

    }
}


function clearMenu(){ //will clear the menu box on submittion.
    alert("Menu Cleared!");
    /*
        let div = document.getElementById("quickMenu");
        div.replaceChild();
        alert("The div has been removed!");
        menuNum = 1;
    */
}

function submitMenu(){ //will submit and call the clearMenu() method to clear the menu for the slots
    alert("Menu Submitted!")
}

function mainSubmit(){ //user information, will disappaear on submit buttons will remain
    alert("User Stored");
}
