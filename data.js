const colors = require("@colors/colors/safe");

const turtles = {
  ALICE: {
    id: 0,
    displayName: "Alice",
    color: colors.magenta,
  },

  DONATELLO: {
    id: 1,
    displayName: "Donatello",
    color: colors.bold.brightMagenta,
  },

  LEONARDO: {
    id: 2,
    displayName: "Leonardo",
    color: colors.bold.blue,
  },

  MICHAELANGELO: {
    id: 3,
    displayName: "Michaelangelo",
    color: colors.bold.yellow,
  },

  RAPHAEL: {
    id: 4,
    displayName: "Raphael",
    color: colors.bold.red,
  },
};

const questions = [
  {
    text: "What is your favorite color?",
    answers: [
      {
        text: "Orange",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "Red",
        turtle: turtles.RAPHAEL,
      },
      {
        text: "Blue",
        turtle: turtles.LEONARDO,
      },
      {
        text: "Purple",
        turtle: turtles.DONATELLO,
      },
      {
        text: "Pink",
        turtle: turtles.ALICE,
      },
    ],
  },
  {
    text: "If you had a pet, what would it be?",
    answers: [
      {
        text: "Horse",
        turtle: turtles.LEONARDO,
      },
      {
        text: "Cat",
        turtle: turtles.RAPHAEL,
      },
      {
        text: "Turtle",
        turtle: turtles.DONATELLO,
      },
      {
        text: "Parrot",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "Bunny",
        turtle: turtles.ALICE,
      },
    ],
  },
  {
    text: "If you could go anywhere on vacation, where would you go?",
    answers: [
      {
        text: "Sightseeing in Japan.",
        turtle: turtles.LEONARDO,
      },
      {
        text: "Going to the Maker's Fair in San Francisco.",
        turtle: turtles.DONATELLO,
      },
      {
        text: "Going to the ferry coaster in Staten Island.",
        turtle: turtles.ALICE,
      },
      {
        text: "Surfing in Hawaii.",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "I hate vacation!",
        turtle: turtles.RAPHAEL,
      },
    ],
  },
  {
    text: "If you were a car, what kind would you be?",
    answers: [
      {
        text: "a giant, tricked-out van",
        turtle: turtles.DONATELLO,
      },
      {
        text: "a muscle car",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "a Volkswagen Beetle",
        turtle: turtles.RAPHAEL,
      },
      {
        text: "a sensible four-door sedan",
        turtle: turtles.LEONARDO,
      },
      {
        text: "A clean purple car",
        turtle: turtles.ALICE,
      },
    ],
  },
  {
    text: "When you meet an enemy, you:",
    answers: [
      {
        text: "Make fun of its looks.",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "Keep your distance until the team arrives.",
        turtle: turtles.DONATELLO,
      },
      {
        text: "Attack it immediately.",
        turtle: turtles.RAPHAEL,
      },
      {
        text: "Sneak up to them, knock them over, and jump on them.",
        turtle: turtles.ALICE,
      },
      {
        text: "Plan your battle strategy.",
        turtle: turtles.LEONARDO,
      },
    ],
  },
  {
    text: "Your favorite part of training is:",
    answers: [
      {
        text: "Getting to learn strategies and tactics.",
        turtle: turtles.LEONARDO,
      },
      {
        text: "Beating all your brothers in combat.",
        turtle: turtles.RAPHAEL,
      },
      {
        text: "Practicing your ninja moves.",
        turtle: turtles.ALICE,
      },
      {
        text: "Jumping all around the dojo.",
        turtle: turtles.MICHAELANGELO,
      },
      {
        text: "I'd actually rather be working in the lab.",
        turtle: turtles.DONATELLO,
      },
    ],
  },
];

module.exports = { questions, turtles };
