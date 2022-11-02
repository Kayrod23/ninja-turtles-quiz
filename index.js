const prompt = require("prompt-sync")();

const { questions, characters } = require("./data");

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

let currentCharacter;
let max = 0;
const scores = {};
responses.forEach((response, i) => {
  const { character } = questions[i].answers.find(
    (_, i) => Number(response) === i + 1
  );

  if (character.id in scores) {
    scores[character.id]++;
  } else {
    scores[character.id] = 1;
  }

  if (scores[character.id] > max) {
    currentCharacter = character;
    max = scores[character.id];
  }
});
