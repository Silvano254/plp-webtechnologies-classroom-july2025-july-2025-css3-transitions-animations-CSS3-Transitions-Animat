// Part 2: Functions, Scope, Parameters, Return Values

// Function with parameter and return value
function calculateSquare(num) {
  return num * num;
}

console.log("Square of 5:", calculateSquare(5)); // Outputs: 25

// Toggle box animation
function toggleBox() {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("show");
  box.classList.toggle("pulse");
}

// Modal Functions
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
