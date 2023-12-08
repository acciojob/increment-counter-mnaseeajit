//your JS code here. If required.
// let increment = getElementById("incrementBtn");
// funtion callme(){
// 	return alert("1");
// }

// increment.addEventListener("click",callme);  

let increment = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

function callme() {
    alert(parseInt(counter.innerText)-1);   
}

increment.addEventListener("click", callme);
