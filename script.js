//your JS code here. If required.

let increment = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

function callme() {
    alert(parseInt(counter.innerText));   
	counter.innerText = parseInt(counter.innerText) + 1;
}

increment.addEventListener("click", callme);

