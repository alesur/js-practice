const app = document.getElementById("root");
const h1 = document.createElement("h1");
h1.textContent = "AGE IN DAYS"

app.appendChild(h1);

const p = document.createElement("p");
p.id = "title";
p.textContent = "Which year did you born?";
app.appendChild(p);

const input = document.createElement("input");
input.id = "inputYear";

const button = document.createElement("button");
button.id = "btn";
button.textContent = "Calculate";

const reset = document.createElement("button");
reset.id = "reset";
reset.textContent = "Reset";

function calculate() {
    let year = document.getElementById("inputYear").value;
    let newDate = new Date();
    let currentYear = newDate.getFullYear();
    let result = (currentYear - year)*365;
    let resultInWeeks = ((currentYear - year)*365)/7;
    document.getElementById("title").innerHTML = "Your are at least " + result + " days old, and " + resultInWeeks + " weeks old";
};


function clear() {
    document.getElementById("title").innerHTML = "Which year did you born?";
    document.getElementById("inputYear").value = "";
}

app.appendChild(input);
app.appendChild(button);
app.appendChild(reset);
document.getElementById("btn").onclick = function() {calculate()};
document.getElementById("reset").onclick = function() {clear()};
//alert("to");


