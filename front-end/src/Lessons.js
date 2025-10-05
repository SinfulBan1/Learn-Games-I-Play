const Lessons = [
  {
    name: "learn-poker",
    title: "Poker (Texas Hold’em)",
    lessons: [
      {
        id: 0,
        title: "What Is Poker?",
        sections: [
          {
            title: "The Basics of Poker",
            content: `Poker is a card game that combines chance, skill, and psychology. Each player gets two private cards and tries to make the best five-card hand using five shared community cards. The fun part? You can win without the best cards by bluffing and convincing others to fold.`,
          },
          {
            title: "The Objective",
            content: `Your goal is to win chips. You can do that by having the best hand at showdown or making everyone else fold before that happens. The tension comes from making smart bets, reading others, and knowing when to walk away.`,
          },
          {
            title: "Why People Love Poker",
            content: `Poker rewards patience, focus, and emotional control. It’s like a mix of math and psychology—every action reveals a bit about what people are holding, and every decision changes the odds.`,
          },
        ],
      },
      {
        id: 1,
        title: "Game Setup",
        sections: [
          {
            title: "The Cards and Chips",
            content: `Texas Hold’em uses a 52-card deck and chips to represent money. Each player starts with an equal number of chips. The chips let you bet without real cash and make calculating bets easier.`,
          },
          {
            title: "Table Positions and Blinds",
            content: `The small blind and big blind start each hand with forced bets, ensuring there’s always something to play for. Acting later in a round (being “in position”) is advantageous because you see what others do before deciding.`,
          },
          {
            title: "The Flow of Play",
            content: `1️⃣ Two cards to each player.  
2️⃣ Bet (Preflop).  
3️⃣ Reveal 3 community cards (Flop) → Bet.  
4️⃣ Reveal 4th card (Turn) → Bet.  
5️⃣ Reveal 5th card (River) → Final bet → Showdown.`,
          },
        ],
      },
      {
        id: 2,
        title: "Hand Rankings & Betting Basics",
        sections: [
          {
            title: "Hand Rankings",
            content: `From strongest to weakest:  
1. Royal Flush  
2. Straight Flush  
3. Four of a Kind  
4. Full House  
5. Flush  
6. Straight  
7. Three of a Kind  
8. Two Pair  
9. One Pair  
10. High Card.`,
          },
          {
            title: "Betting Options",
            content: `You can:  
- **Check** (do nothing if no one bet yet),  
- **Call** (match a bet),  
- **Raise** (increase it),  
- **Fold** (give up your cards).  
Bet sizing is part math, part storytelling—you’re always sending a message.`,
          },
        ],
      },
      {
        id: 3,
        title: "Strategy & Tips",
        sections: [
          {
            title: "Starting Hands",
            content: `Play strong starting hands like pairs, high cards (A-K, K-Q), or connected cards (9-10 suited). Don’t feel pressured to play every hand—folding is part of the game.`,
          },
          {
            title: "Bluffing Smart",
            content: `Bluff occasionally, not constantly. A good bluff makes sense based on your previous actions. If your story doesn’t add up, people will call your bluff.`,
          },
          {
            title: "Beginner Pitfalls",
            content: `Avoid chasing every draw, calling too often, or playing tired. The best poker players fold more than half their hands.`,
          },
        ],
      },
    ],
  },

  {
    name: "learn-liarsdice",
    title: "Liar’s Dice",
    lessons: [
      {
        id: 0,
        title: "What Is Liar’s Dice?",
        sections: [
          {
            title: "The Basics",
            content: `Liar’s Dice is a game of hidden information and bluffing. Everyone rolls dice in secret and takes turns bidding on how many of a certain face value exist across all players.`,
          },
          {
            title: "The Goal",
            content: `You win by being the last player with dice left. Each round, someone either gets caught lying or loses a die for making an incorrect challenge.`,
          },
        ],
      },
      {
        id: 1,
        title: "Game Setup",
        sections: [
          {
            title: "Getting Ready",
            content: `Each player has five dice and a cup. Everyone rolls secretly. The first player starts the bidding, like “two 4s,” meaning they believe there are at least two dice showing 4 across all players.`,
          },
          {
            title: "Raising & Challenging",
            content: `You can either increase the bid (raise quantity or value) or challenge the current bid by saying “liar.” Once challenged, all dice are revealed to see who loses one.`,
          },
        ],
      },
      {
        id: 2,
        title: "Strategy & Tips",
        sections: [
          {
            title: "Watch Behavior, Not Words",
            content: `Players often reveal more through tone and body language than their bids. Calm confidence can be fake—or real. Keep mental notes on who bluffs big and who plays safe.`,
          },
          {
            title: "Mathematical Edge",
            content: `With five dice per player, you can roughly expect each face value to appear one-sixth of the time. Use this to decide if a bid sounds realistic before calling liar.`,
          },
          {
            title: "Beginner Advice",
            content: `Early on, make conservative bids until you get a sense of the group. As dice are lost, increase pressure and use bolder bluffs. Confidence sells your lie.`,
          },
        ],
      },
    ],
  },

  {
    name: "learn-catan",
    title: "Settlers of Catan",
    lessons: [
      {
        id: 0,
        title: "What Is Settlers of Catan?",
        sections: [
          {
            title: "Overview",
            content: `Catan is a board game about resource management and trading. Players build settlements and roads to collect wood, brick, wheat, sheep, and ore. The first player to reach 10 victory points wins.`,
          },
          {
            title: "Why It’s So Popular",
            content: `Catan is easy to learn but full of strategy. It mixes luck (dice rolls) with smart planning (settlement placement and trades).`,
          },
        ],
      },
      {
        id: 1,
        title: "Game Setup & Rules",
        sections: [
          {
            title: "Building the Board",
            content: `The board is made of hex tiles representing resources. Number tokens (2–12) determine which tiles produce resources each roll. Everyone starts with two settlements and two roads.`,
          },
          {
            title: "Turn Order",
            content: `Each turn:  
1️⃣ Roll dice → Collect resources.  
2️⃣ Trade with players or use ports.  
3️⃣ Build roads, settlements, or cities.  
4️⃣ Buy development cards (for special powers or points).`,
          },
        ],
      },
      {
        id: 2,
        title: "Strategy & Tips",
        sections: [
          {
            title: "Starting Placement",
            content: `Choose spots with diverse resources and high-frequency numbers (6, 8, 9). Avoid cornering yourself into needing one rare resource.`,
          },
          {
            title: "Trading Smart",
            content: `Always trade with purpose—every trade should bring you closer to a goal. Be cautious about helping someone who’s already close to 10 points.`,
          },
          {
            title: "Long-Term Planning",
            content: `Balance expansion with upgrading to cities. Roads are great for growth, but cities double your income. Think two turns ahead.`,
          },
        ],
      },
    ],
  },

  {
    name: "learn-mafia",
    title: "Mafia",
    lessons: [
      {
        id: 0,
        title: "What Is Mafia?",
        sections: [
          {
            title: "The Basics",
            content: `Mafia is a social deduction game of lies and teamwork. Players are secretly assigned roles—Mafia (killers) or Town (innocents). Mafia try to eliminate the Town without being discovered.`,
          },
          {
            title: "How the Game Flows",
            content: `Each round has two phases:  
🌙 **Night** – Mafia secretly choose a player to eliminate.  
🌞 **Day** – Everyone debates and votes on who to eliminate, trying to catch the Mafia.`,
          },
        ],
      },
      {
        id: 1,
        title: "Roles & Setup",
        sections: [
          {
            title: "Common Roles",
            content: `- **Mafia**: Know who’s on their team, eliminate others.  
- **Detective**: Can investigate one person per night.  
- **Doctor**: Can protect one person per night.  
- **Townies**: Must use logic and persuasion to survive.`,
          },
          {
            title: "The Moderator",
            content: `A neutral storyteller who manages the night/day cycle, announces events, and ensures the game runs smoothly.`,
          },
        ],
      },
      {
        id: 2,
        title: "Strategy & Tips",
        sections: [
          {
            title: "If You’re Mafia",
            content: `Blend in. Agree with others sometimes, and don’t speak too much or too little. Coordinate kills strategically—eliminate the loud players who seem trusted.`,
          },
          {
            title: "If You’re Town",
            content: `Take notes and trust patterns. Mafia often defend each other subtly. Don’t tunnel on one person—observe alliances and contradictions.`,
          },
          {
            title: "General Advice",
            content: `Control your emotions and act consistent. The best players appear calm and logical even when accused. Mafia is less about talking the most and more about saying the *right* thing.`,
          },
        ],
      },
    ],
  },
];

export default Lessons;
