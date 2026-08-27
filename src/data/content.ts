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
      "Checking childhood memories...",
      "Checking your sense of humor...",
      "Checking how much you care...",
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
        q: "Who is more likely to check if the other is okay?",
        options: [
          { text: "Me", response: "Interesting answer." },
          { text: "You", response: "Bold choice." },
          { text: "Both of us", response: "I'll allow it." }
        ]
      },
      {
        q: "Who is more likely to give advice?",
        options: [
          { text: "Me", response: "That answer has been recorded." },
          { text: "You", response: "Noted." },
          { text: "Depends on the situation", response: "Probably true." }
        ]
      },
      {
        q: "Who knows when something is wrong without being told?",
        options: [
          { text: "Me", response: "You're very perceptive." },
          { text: "You", response: "I try my best." },
          { text: "We both do", response: "That's how it should be." }
        ]
      },
      {
        q: "Who would answer a call at 2 AM?",
        options: [
          { text: "Me", response: "I appreciate that." },
          { text: "You", response: "Always." },
          { text: "Hopefully both", response: "Absolutely." }
        ]
      },
      {
        q: "Who knows the other better?",
        options: [
          { text: "Me", response: "Bold claim." },
          { text: "You", response: "I like to think so." },
          { text: "Still undecided", response: "Fair enough." }
        ]
      }
    ],
    conclusion: [
      "Connection confirmed.",
      "Care level: 100%",
      "Sibling bond: permanently active."
    ],
    button: "Okay, now the serious part →"
  },

  appreciation: {
    lines: [
      "Okay...",
      "There's something I don't say often enough.",
      "Thank you.",
      "For always being there.",
      "For the little things you do.",
      "For caring even when you don't have to.",
      "For listening.",
      "For supporting the people you love.",
      "For being someone I can count on."
    ],
    interruption: [
      "And I hope you know...",
      "I care about you more than I probably say."
    ],
    button: "Continue →"
  },

  careSupport: {
    lines: [
      "One thing I want you to remember.",
      "You don't have to have everything figured out.",
      "You don't have to handle everything alone.",
      "Whenever you need someone...",
      "I'll be there.",
      "Always."
    ],
    reveal: [
      "I'll always be cheering for you.",
      "I'll always want to see you happy.",
      "I'm proud of how far you've come.",
      "I hope you always believe in yourself.",
      "Whatever life brings...",
      "You'll always have my support."
    ],
    button: "Continue →"
  },

  rakhiReveal: {
    getLines: (name: string) => [
      "Maybe you've figured it out by now.",
      "This wasn't just a random website.",
      "This was made for one reason.",
      "Raksha Bandhan.",
      "Some bonds are difficult to explain.",
      "They simply exist.",
      "They grow with you.",
      "They stay with you.",
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
      "I may not always say everything out loud...",
      "But I hope you know how much I care about you.",
      "I hope you always have the courage\nto chase what makes you happy.",
      "I hope you believe in yourself\neven on the difficult days.",
      "And whenever you need someone\nto stand beside you...",
      "I'll be there.",
      "Always.",
      "I'll always be proud of you.",
      "And I'll always want to see you happy.",
      `Happy Raksha Bandhan, ${name}.`
    ],
    name: (name: string) => name,
    signatureOutro: "Always your brother,",
    signatureName: "Gaurav",
    footer: "Made especially for you."
  }
};
