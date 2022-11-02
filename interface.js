// A proof-of-concept example of the interface code.
const prompt = require("prompt-sync")();

const questions = [
  "How are you?\n",
  "What's your name?\n",
  "What's the best programming language?",
];

const responses = [];

for (let i = 0; i < questions.length; i++) {
  console.clear();
  console.log(questions[i]);
  const response = prompt();
  responses.push(response);
}

console.clear();
console.log("Here were your responses");

for (let i = 0; i < responses.length; i++) {
  console.log(responses[i]);
}
