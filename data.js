const characters = [
  {
    id: 0,
    displayName: "Donatello",
  },
  {
    id: 1,
    displayName: "Leonardo",
  },
  {
    id: 2,
    displayName: "Michaelangelo",
  },
  {
    id: 3,
    displayName: "Raphael",
  },
];

const questions = [
  {
    text: "What is your favorite color?",
    answers: [
      {
        text: "Orange",
        characterId: 2,
      },
      {
        text: "Red",
        characterId: 3,
      },
      {
        text: "Blue",
        characterId: 1,
      },
      {
        text: "Purple",
        characterId: 0,
      },
    ],
  },
  {
    text: "If you had a pet, what would it be?",
    answers: [
      {
        text: "Horse",
        characterId: 1,
      },
      {
        text: "Cat",
        characterId: 3,
      },
      {
        text: "Turtle",
        characterId: 0,
      },
      {
        text: "Parrot",
        characterId: 2,
      },
    ],
  },
  {
    text: "If you could go anywhere on vacation, where would you go?",
    answers: [
      {
        text: "Sightseeing in Japan.",
        characterId: 1,
      },
      {
        text: "Going to the Maker's Fair in San Francisco.",
        characterId: 0,
      },
      {
        text: "Surfing in Hawaii.",
        characterId: 2,
      },
      {
        text: "I hate vacation!",
        characterId: 3,
      },
    ],
  },
  {
    text: "If you were a car, what kind would you be?",
    answers: [
      {
        text: "a giant, tricked-out van",
        characterId: 0,
      },
      {
        text: "a muscle car",
        characterId: 2,
      },
      {
        text: "a Volkswagen Beetle",
        characterId: 3,
      },
      {
        text: "a sensible four-door sedan",
        characterId: 1,
      },
    ],
  },
  {
    text: "When you meet an enemy, you:",
    answers: [
      {
        text: "Make fun of its looks.",
        characterId: 2,
      },
      {
        text: "Keep your distance until the team arrives.",
        characterId: 0,
      },
      {
        text: "Attack it immediately.",
        characterId: 3,
      },
      {
        text: "Plan your battle strategy.",
        characterId: 1,
      },
    ],
  },
  {
    text: "Your favorite part of training is:",
    answers: [
      {
        text: "Getting to learn strategies and tactics.",
        characterId: 1,
      },
      {
        text: "Beating all your brothers in combat.",
        characterId: 3,
      },
      {
        text: "Jumping all around the dojo.",
        characterId: 2,
      },
      {
        text: "I'd actually rather be working in the lab.",
        characterId: 0,
      },
    ],
  },
];

module.exports = { questions, characters };
