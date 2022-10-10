const prompt = require("prompt");
const colors = require("@colors/colors/safe");

const { questions, turtles } = require("./data");

const responses = [];
prompt.message = "";
prompt.start();

questions.forEach(({ answers }) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }
});

const ask = async (i) => {
  if (i === questions.length) {
    finishQuiz();

    return;
  }

  const { text, answers } = questions[i];
  const questionText =
    "\n" +
    colors.brightGreen.bold(text) +
    "\n\n" +
    answers
      .map(
        (answer, i) =>
          `${colors.green.bold(i + 1)}. ${colors.black.bold(answer.text)}`
      )
      .join("\n") +
    "\n\n";

  const question = {
    name: "text",
    message: questionText,
    validator: /\d+/,
    warning: colors.red.bold("\n\n\nPLEASE ENTER A NUMBER!"),
  };

  responses.push((await prompt.get(question)).text);
  ask(i + 1);
};

const finishQuiz = () => {
  let currentTurtle;
  let max = 0;
  const scores = {};
  responses.forEach((response, i) => {
    const { turtle } = questions[i].answers.find(
      (_, i) => Number(response.trim()) === i + 1
    );
    if (turtle.id in scores) {
      scores[turtle.id]++;
    } else {
      scores[turtle.id] = 1;
    }

    if (scores[turtle.id] > max) {
      currentTurtle = turtle;
      max = scores[turtle.id];
    }
  });

  console.log(
    "\n" +
      `Your turtle is: ${colors[currentTurtle.color].bold(
        currentTurtle.displayName
      )}!`
  );
};

ask(0);
