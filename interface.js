// A proof-of-concept example of the interface code.
const prompt = require("prompt-sync")();

const questions = [
  "how are you?\n",
  "what's your name?\n",
  "who's your daddy?\n",
];
const responses = [];

for (let i = 0; i < questions.length; i++) {
  console.clear();
  console.log(questions[i]);
  const response = prompt();
  responses.push(response);
}

console.clear();

for (let i = 0; i < responses.length; i++) {
  console.log(responses[i]);
}
