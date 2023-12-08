//your JS code here. If required.

// let increment = document.getElementById("incrementBtn");
// let counter = document.getElementById("counter");

// function callme() {
//     alert(parseInt(counter.innerText)-1);   
// }

// increment.addEventListener("click", callme);

 document.addEventListener('DOMContentLoaded', function() {
            let counter = document.getElementById('counter');
            let incrementBtn = document.getElementById('incrementBtn');

            incrementBtn.addEventListener('click', function() {
                alert('Current Counter Value: ' + counter.innerText);
            });
        });
