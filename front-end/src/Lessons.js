const Lessons = [{
    name: "learn-poker",
    title: "Poker",
    lessons: [{
        id: 0,
        title: "What Is Poker?",
        sections: [{
            title: "The Basics of Poker",
            content: `Poker is a card game where players compete to make the best hand or bluff others into folding. Texas Hold’em is the most popular variation, played worldwide in casinos, online, and at home games. It is the only version of Poker I, and most other people for that matter, know how to play.`
        }, {
            title: "The Goal of the Game",
            content: `In Texas Hold’em, the goal is to win chips by either (1) having the best five-card hand at showdown, or (2) getting everyone else to fold before showdown.`
        }
        ]
        }, {
        id: 1,
        title: "Game Setup",
        sections: [{
            title: "The Cards and Chips",
            content: "Texas Hold’em uses a standard 52-card deck. Each player starts with a stack of chips, which represent money (or points if playing casually)."
        }, {
            title: "The Table Positions",
            content: "Players sit around a table. Two players post forced bets called the small blind and big blind, which start the action. The position relative to the dealer button is very important in poker strategy."
        }
        ]
        }, {
        id: 2,
        title: "How a Hand is Played",
        sections: [{
            title: "Dealing the Cards",
            content: "Each player is dealt two private cards, called hole cards. Players use these with the community cards to make the best hand."
        }, {
            title: "The Betting Rounds",
            content: "There are four betting rounds: Preflop, Flop, Turn, and River. At each stage, players can check, bet, call, raise, or fold depending on the situation."
        }, {
            title: "Showdown",
            content: "If more than one player is left after the final betting round, they reveal their cards. The best five-card poker hand wins the pot."
        }
        ]
    }]
}, {
    name: "learn-liarsdice",
    title: "Liar's Dice",
    lessons: [{
        id: 1,
        title: "What is Liar’s Dice?",
        sections: [
        {
            title: "Overview",
            content: `Liar’s Dice is a bluffing dice game where players bid on how many of a certain face value are hidden under cups.`
        }, {
            title: "Goal of the Game",
            content: `Be the last player with dice remaining by outsmarting and bluffing opponents.`
        }
        ]
        }, {
        id: 2,
        title: "Game Setup",
        sections: [{
            title: "Equipment",
            content: `Each player has 5 dice and a cup to hide them.`
        }, {
            title: "Starting the Game",
            content: `All players roll their dice in secret.`
        }
      ]
    }, {
        id: 3,
        title: "Gameplay Basics",
        sections: [{
            title: "Bidding",
            content: `On a turn, a player bids how many dice of a face value they think exist in total. Example: "Four 3s".`
        }, {
            title: "Challenging",
            content: `The next player may either raise the bid or challenge by saying "liar."`
        }, {
            title: "Revealing Dice",
            content: `If challenged, everyone reveals dice. If the bid is correct, the challenger loses a die. If wrong, the bidder loses one.`
        }
      ]
    }
    ]
}, {
    name: "learn-catan",
    title: "Settlers of Catan",
    lessons: [{
      id: 1,
      title: "What is Settlers of Catan?",
      sections: [
        {
          title: "Overview",
          content: `Settlers of Catan is a strategy board game where players build settlements, cities, and roads to collect resources and earn victory points. First to 10 points wins.`
        },
        {
          title: "Goal of the Game",
          content: `The objective is to expand across the island of Catan and strategically trade resources with others.`
        }
      ]
    },
    {
      id: 2,
      title: "Game Setup",
      sections: [
        {
          title: "Board Setup",
          content: `The board is made of hexagonal tiles representing resources: wood, brick, sheep, wheat, and ore. Each tile is assigned a number token.`
        },
        {
          title: "Starting Settlements",
          content: `Players place 2 settlements and 2 roads on intersections of tiles. Settlements collect resources when adjacent numbers are rolled.`
        }
      ]
    },
    {
      id: 3,
      title: "Gameplay Basics",
      sections: [
        {
          title: "Resource Collection",
          content: `At the start of each turn, dice are rolled. All players with settlements on tiles matching that number collect resources.`
        },
        {
          title: "Trading & Building",
          content: `Players may trade resources with others and use them to build new roads, settlements, or upgrade to cities.`
        },
        {
          title: "The Robber",
          content: `Rolling a 7 activates the robber. The robber blocks a tile from producing resources until moved.`
        }
      ]
    }]
}
];

export default Lessons;