export const content = {
  mystery: {
    lines: [
      "There is someone\nI want to talk to...",
      "Someone very special.",
      "Someone who probably doesn't\nknow this is about her.",
      "Maybe that's you."
    ],
    inputPlaceholder: "Enter your name...",
    button: "Begin →"
  },

  nameReveal: {
    getLines: (name: string) => [
      `${name}...`,
      "Yes.",
      "I was hoping you'd enter your name.",
      "This little surprise is for you.",
      "Come in."
    ],
    button: "Continue →"
  },

  identityCheck: {
    title: "IDENTITY CHECK",
    checks: [
      "Checking name...",
      "Checking childhood memories...",
      "Checking your sense of humor...",
      "Checking how much you care...",
      "Checking how much you're loved..."
    ],
    getConclusion: (name: string) => [
      "Identity confirmed.",
      "You are a sister.",
      "More specifically...",
      `You are ${name} Di.`,
      "Access granted."
    ],
    button: "Continue →"
  },

  sisterTest: {
    preTitle: "Okay, now for something very important...",
    title: "How well do you really know Gaurav?",

    questions: [
      {
        q: "First of all... how is Gaurav?",
        options: [
          {
            text: "Very good",
            response: "Correct. Excellent start."
          },
          {
            text: "Very, very good",
            response: "Now we're talking."
          },
          {
            text: "The best",
            response: "Okay, you clearly know me very well."
          }
        ]
      },

      {
        q: "What is Gaurav's most underrated quality?",
        options: [
          {
            text: "His intelligence",
            response: "A strong answer. Very strong."
          },
          {
            text: "His personality",
            response: "I was hoping someone would notice."
          },
          {
            text: "Everything, obviously",
            response: "Perfect. No corrections needed."
          }
        ]
      },

      {
        q: "If Gaurav gives advice, how good is it?",
        options: [
          {
            text: "Pretty good",
            response: "I'll accept that."
          },
          {
            text: "Actually very good",
            response: "Thank you for recognizing talent."
          },
          {
            text: "Life-changing",
            response: "Please remain seated. This is getting emotional."
          }
        ]
      },

      {
        q: "How lucky are you to have Gaurav as your brother?",
        options: [
          {
            text: "Quite lucky",
            response: "Correct, but you can do better."
          },
          {
            text: "Extremely lucky",
            response: "That's more accurate."
          },
          {
            text: "The luckiest",
            response: "Finally. Someone is being honest."
          }
        ]
      },

      {
        q: "Final question: What makes Gaurav so special?",
        options: [
          {
            text: "He's smart",
            response: "True."
          },
          {
            text: "He's kind",
            response: "Also true."
          },
          {
            text: "He's Gaurav",
            response: "Exactly. No further explanation required."
          }
        ]
      }
    ],

    conclusion: [
      "Test complete.",
      "Knowledge about Gaurav: impressive.",
      "Your answers: mostly correct.",
      "My confidence: completely unaffected.",
      "Final result:",
      "You officially know your brother."
    ],

    button: "Okay, enough about me →"
  },

  appreciation: {
    lines: [
      "Okay...",
      "Enough testing.",
      "There's something I don't say often enough.",
      "Thank you.",
      "For always being there.",
      "For the little things you do.",
      "For caring even when you don't have to.",
      "For listening.",
      "For supporting the people you love.",
      "For being someone I can count on.",
      "And honestly...",
      "Life is just a little better with you in it."
    ],

    interruption: [
      "Of course, you're still my sister...",
      "So naturally, you have a lifetime membership to annoy me.",
      "But that's okay.",
      "I wouldn't have it any other way."
    ],

    button: "There's more →"
  },

  careSupport: {
    lines: [
      "One thing I want you to remember.",
      "You don't have to have everything figured out.",
      "You don't have to handle everything alone.",
      "Whenever life feels a little too much...",
      "You can always count on me.",
      "I'll be there.",
      "Always."
    ],

    reveal: [
      "I'll always be cheering for you.",
      "I'll always want to see you happy.",
      "I'll always be proud of how far you've come.",
      "I hope you always believe in yourself.",
      "I hope you never stop chasing the things that make you happy.",
      "And whenever you need someone...",
      "I'll be here.",
      "Whatever life brings...",
      "You'll always have my support."
    ],

    button: "There's one more thing →"
  },

  rakhiReveal: {
    getLines: (name: string) => [
      "Maybe you've figured it out by now.",
      "This wasn't just a random website.",
      "This was made for one reason.",
      "Raksha Bandhan 🥰",
      "Some bonds are difficult to explain.",
      "They simply exist.",
      "They grow with you.",
      "They stay with you.",
      "A thread can be small.",
      "But what it represents...",
      "never is.",
      "It's a reminder that no matter where life takes us...",
      "you'll always have someone who cares about you.",
      `Happy Raksha Bandhan, ${name} Di.`
    ],

    button: "There's still a surprise →"
  },

  giftReveal: {
    lines: [
      "You thought that was the surprise?",
      "No.",
      "I wouldn't make it that easy.",
      "There's one more thing."
    ],

    button: "Open Your Gift →"
  },

  finalLetter: {
    getLines: (name: string) => [
      `Dear ${name} Di,`,

      "I may not always say everything out loud...",

      "But I hope you know how much I care about you.",

      "You've always been someone\nI want to see happy and doing well.",

      "I'm proud of the person you're becoming.",

      "And I hope you always have the courage\nto chase the things you truly want.",

      "There will be good days.\nThere will be difficult ones too.",

      "But whenever you need someone\nto stand beside you...",

      "I'll be there.",

      "To listen.",

      "To support you.",

      "To remind you that you're capable.",

      "And sometimes...\nprobably to give you advice you didn't ask for.",

      "Because that's what brothers are for.",

      "No matter how much life changes...",

      "I hope one thing never changes:",

      "You'll always have my support.",

      "I'll always be proud of you.",

      "And I'll always want to see you happy.",

      `Happy Raksha Bandhan, ${name} Di.`
    ],

    name: (name: string) => name,

    signatureOutro: "Always your brother,",

    signatureName: "Gaurav",

    footer: "Made especially for you."
  }
};