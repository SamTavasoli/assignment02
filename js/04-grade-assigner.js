let score = parseInt(window.prompt("Enter a score between 1 and 100:"));

if (isNaN(score) || score < 1 || score > 100) {
    console.log("Please enter a valid number between 1 and 100");
} else if (score >= 90 && score <= 100) {
    console.log("You received an A");
} else if (score >= 80 && score < 90) {
    console.log("You received a B");
} else if (score >= 70 && score < 80) {
    console.log("You received a C");
} else if (score >= 60 && score < 70) {
    console.log("You received a D");
} else {
    console.log("You received an F");
}
