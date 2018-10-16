// Capture the Buttons and attacht eh event handles
var showBtn = document.querySelector('#showBtn');
var removeBtn = document.querySelector('#removeBtn');

showBtn.addEventListener('click', handleShow);
removeBtn.addEventListener('click', handleRemove);


// Event handler Functions
function handleShow(){
    document.querySelector('#attrs').innerHTML = "Result : " + document.getElementById("google").getAttribute("href");;
}
// Event handler Functions
function handleRemove(){
    document.querySelector('#attrs').innerHTML = "Result : "
}