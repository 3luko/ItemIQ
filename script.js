
const firstNameText = document.getElementById("firstNameText");
const lastNameText = document.getElementById("lastNameText");
const firstLastButton = document.querySelector("firstLastButton");



function dispName(){
    firstNameText.innerHTML = document.getElementById("fName").value;
    lastNameText.innerHTML = document.getElementById("lName").value;
}