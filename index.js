// An external library that gives us a nice prompt command.
// https://github.com/heapwolf/prompt-sync
const prompt = require("prompt-sync")();

// The questions and characters from our data file.
const { questions, characters } = require("./data");



for (let i = 0; i < questions.length; i++){
  let userFacingQuestion = questions[i].text;
  const answers = questions[i].answers;
  let answerTexts = ''
  for (let j = 0; j < answers.length; j++){
    answerTexts[j].text += "/n" + answers[j].text
  }
  userFacingQuestion += "/n/n" + answerTexts
  console.log(userFacingQuestion)
}
// For each question in the data's questions array:
  // Format the question into 1. the question's text and 2. a list from the question's answers.
  // Print that formatted question.
  // Call `prompt` above, saving the return value—that's the user's response.
  // Save the responses into one variable.

// Maybe test at this point what our responses are!

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
      // Increase the `characterId` _key_ in our accumulator object to have a value 1 more than it is now.
      // Check if that score is the biggest we've seen so far.
      // If it is:
        // Update our biggest-seen score.
        // Update what character is the most-matched.

// Finally, let's print out for our user what character they got!
