export const content = {
  mystery: {
    lines: [
      "There is someone\nI want to talk to...",
      "Someone very special.",
      "Maybe that's you.",
    ],
    inputPlaceholder: "Enter your name...",
    button: "Begin →"
  },
  
  nameReveal: {
    getLines: (name: string) => [
      `${name}...`,
      "Yes.",
      "This is for you.",
      "Come in."
    ],
    button: "Continue →"
  },

  identityCheck: {
    title: "IDENTITY CHECK",
    checks: [
      "Checking name...",
      "Checking childhood chaos...",
      "Checking arguments...",
      "Checking annoying habits...",
      "Checking how much you're loved..."
    ],
    getConclusion: (name: string) => [
      "Identity confirmed.",
      "You are a sister.",
      "More specifically...",
      `You are ${name}.`,
      "Access granted."
    ],
    button: "Continue →"
  },

  sisterTest: {
    preTitle: "Before we continue...",
    title: "Let's see how well you know your brother.",
    questions: [
      {
        q: "Who is more annoying?",
        options: [
          { text: "Me", response: "Interesting answer." },
          { text: "You", response: "Bold choice." },
          { text: "Both of us", response: "Probably the most accurate." }
        ]
      },
      {
        q: "Who is more likely to start an argument?",
        options: [
          { text: "Me", response: "At least you admit it." },
          { text: "You", response: "I'll pretend I agree." },
          { text: "We both know the answer", response: "Yes, yes we do." }
        ]
      },
      {
        q: "Who would win in an argument?",
        options: [
          { text: "Me", response: "Keep dreaming." },
          { text: "You", response: "Finally, some respect." },
          { text: "Nobody. We'd just keep arguing.", response: "The sad reality." }
        ]
      },
      {
        q: "Who gets away with more?",
        options: [
          { text: "Me", response: "Unfair, but true." },
          { text: "You", response: "That's definitely a lie." },
          { text: "Definitely you", response: "I strongly disagree." }
        ]
      },
      {
        q: "Who is more important?",
        options: [
          { text: "Me", response: "Typical." },
          { text: "You", response: "I appreciate the honesty." },
          { text: "That's not even a question.", response: "Exactly." }
        ]
      }
    ],
    conclusion: [
      "Sister status confirmed.",
      "100% Certified Sister",
      "Scientific accuracy: questionable.",
      "Brother's confidence: absolute."
    ],
    button: "Okay, now the serious part →"
  },

  appreciation: {
    lines: [
      "Okay...",
      "Enough jokes.",
      "There are some things\nI don't say often enough.",
      "Thank you.",
      "For being there.",
      "For listening.",
      "For putting up with me.",
      "For making ordinary days better.",
      "For being someone I can always call family."
    ],
    interruption: [
      "And yes...",
      "Sometimes you are incredibly annoying.",
      "Okay...",
      "Quite often.",
      "But that's part of the deal.",
      "I wouldn't change it."
    ],
    button: "Continue →"
  },

  threeSisters: {
    lines: [
      "Three sisters.",
      "Three completely different personalities.",
      "Three different kinds of chaos.",
      "But somehow...",
      "We became one family."
    ],
    reveal: [
      "Different stories.",
      "Different dreams.",
      "Different lives.",
      "But one bond.",
      "And that bond is something\nI'll always be grateful for."
    ],
    button: "Continue →"
  },

  rakhiReveal: {
    getLines: (name: string) => [
      "Maybe you've figured it out by now.",
      "This wasn't just a random website.",
      "This was made for one reason.",
      "Raksha Bandhan.",
      "A thread can be small.",
      "But what it represents...",
      "never is.",
      `Happy Raksha Bandhan, ${name}.`
    ],
    button: "Continue →"
  },

  giftReveal: {
    lines: [
      "You thought that was the surprise?",
      "No.",
      "There's one more thing."
    ],
    button: "Open Your Gift →"
  },

  finalLetter: {
    getLines: (name: string) => [
      `Dear ${name},`,
      "We may argue.",
      "We may annoy each other.",
      "We may disagree.",
      "And sometimes we may drive each other crazy.",
      "But at the end of the day...",
      "You are my sister.",
      "And that's something\nI'll always be grateful for.",
      "Life will change.",
      "We'll grow older.",
      "Our paths will change.",
      "But no matter where life takes us...",
      "You'll always have a brother\nwho is rooting for you.",
      `Happy Raksha Bandhan, ${name}.`
    ],
    name: (name: string) => name,
    signatureOutro: "Always your brother,",
    signatureName: "Gaurav",
    footer: "Made especially for you."
  }
};
