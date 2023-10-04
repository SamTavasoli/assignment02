let coinFlip = Math.round(Math.random());
let choice = window.prompt("Select Heads or Tails");

if (coinFlip === 0) { // Considering 0 as Heads
    if (choice.toLowerCase() === "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (choice.toLowerCase() === "tails") {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Invalid choice! Please enter either 'Heads' or 'Tails'.");
    }
} else if (coinFlip === 1) { // Considering 1 as Tails
    if (choice.toLowerCase() === "tails") {
        window.alert("The flip was tails and you chose tails...you win!");
    } else if (choice.toLowerCase() === "heads") {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else {
        window.alert("Invalid choice! Please enter either 'Heads' or 'Tails'.");
    }
}
