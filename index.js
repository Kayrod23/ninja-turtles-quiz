const prompt = require("prompt-sync")();

const { questions, turtles } = require("./data");

const responses = [];
for (let i = 0; i < questions.length; i++) {
  const { text, answers } = questions[i];
  const questionText =
    "\n" +
    text +
    "\n\n" +
    answers.map((answer, i) => `${i + 1}. ${answer.text}`).join("\n") +
    "\n\n";

  console.log(questionText);
  const response = prompt();
  responses.push(response);
}

let currentTurtle;
let max = 0;
const scores = {};
responses.forEach((response, i) => {
  console.log(response);
});

// console.log("\n" + `Your turtle is: ${currentTurtle.displayName}!`);
