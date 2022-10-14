const prompt = require("prompt-sync");

const { questions, turtles } = require("./data");
const {shuffle} = require('./helpers')

const responses = [];

shuffle(questions)
for (let i = 0; i < questions.length; i++) {
  shuffle(questions[i].answers)
};

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

  const numTurtles = Object.keys(turtles).length;
  const validator = new RegExp(
    "(?=.{1," +
      numTurtles.toString().length +
      "}$)" +
      "^[1-" +
      (numTurtles < 10 ? numTurtles : 9) +
      "]$"
  );

  const question = {
    name: "response",
    message: questionText,
    warning: colors.red.bold(
      `\n\n\nPLEASE ENTER A NUMBER BETWEEN 1 AND ${numTurtles}!`
    ),

    validator,
  };

  responses.push((await prompt.get(question)).response);
  ask(i + 1);
};

const finishQuiz = () => {
  let currentTurtle;
  let max = 0;
  const scores = {};
  responses.forEach((response, i) => {
    const { turtle } = questions[i].answers.find(
      (_, i) => Number(response) === i + 1
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
    "\n" + `Your turtle is: ${currentTurtle.color(currentTurtle.displayName)}!`
  );
};

ask(0);
