const prompt = require("prompt-sync")();

const { questions, characters } = require("./data");

// For each question in the data's questions array:
  // Format the question into 1. the question's text and 2. a list from the question's answers.
  // Print that formatted question.
  // Call `prompt` above, saving the return value—that's the user's response.
  // Save the responses into one variable.

// Maybe test at this point what our responses are!

const responses = [];
for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  const answers = question.answers;
  let answerText = "";
  for (let i = 0; i < answers.length; i++) {
    answerText += `${i + 1}. ${answers[i].text}` + "\n";
  }

  const questionText = "\n" + question.text + "\n\n" + answerText + "\n\n";

  console.clear();
  console.log(questionText);
  const userResponse = prompt();
  responses.push(userResponse);
}

console.clear();
for (let i = 0; i < responses.length; i++) {
  console.log(responses[i]);
}

// Now we need to figure out who the character is who matched the most responses.

// Each question matches up to a response. So the first response we saved should
// be for questions[0], the second one for questions[1], etc.

// Each question's answer has a `characterId`, which is the index for the
// character it matches in the data file's characters array.

// As we loop through our responses to find the matching character, we'll need
// to keep track of what character has the most matching responses. Our
// accumulator will work best if it's an object with the following shape:

// {'0': 2, '1': 3, '3': 1}

// The above result would be if there were four responses, and character 0 had 2
// matching response, character 1 had 3 matching responses, and character 3 had
// 1 matching response. Character 2 had no responses in this case, and so we
// never even started tracking them.

// So what we need to do is:

// Loop through the responses they gave us.
// For each response:
// Find the matching question in the questions array (remember the matching rule above!).
// Loop through its answers.
// For each answer:
// Check if it matches the user's response. Did they pick this answer?
// If so:
// Grab the `characterId` property on that answer.
// Increase the characterId _key_ in our accumulator object to have a value 1 more than it is now.
// Check if that score is the biggest we've seen so far.
// If it is:
// Update our biggest-seen score.
// Update what character is the most-matched.

// Finally, let's print out for our user what character they got!

let currentCharacter;
let max = 0;
const scores = {};
for (let responsesI = 0; responsesI < responses.length; responsesI++) {
  const answers = questions[responsesI].answers;
  for (let answersI = 0; answersI < answers.length; answersI++) {
    if (Number(responses[responsesI] - 1) === answersI) {
      const characterId = answers[answersI].characterId;
      if (characterId in scores) {
        scores[characterId]++;
      } else {
        scores[characterId] = 1;
      }

      if (scores[characterId] > max) {
        max = scores[characterId];
        currentCharacter = characters[characterId];
      }

      console.log({ scores });
      console.log({ max });
      console.log({ currentCharacter });
    }
  }
}

console.clear();
console.log("You got:\n");
console.log(currentCharacter + "!");
