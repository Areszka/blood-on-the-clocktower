export const CHARACTERS = [
  {
    type: "Townsfolk",
    name: "Washerwoman",
    power: "You start knowing that 1 of 2 players is a particular Townsfolk.",
  },
  {
    type: "Townsfolk",
    name: "Librarian",
    power:
      "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
  },
  {
    type: "Townsfolk",
    name: "Investigator",
    power: "You start knowing that 1 of 2 players is a particular Minion.",
  },
  {
    type: "Townsfolk",
    name: "Chef",
    power: "You start knowing how many pairs of evil players there are.",
  },
  {
    type: "Townsfolk",
    name: "Empath",
    power: "Each night, you learn how many of your 2 alive neighbors are evil.",
  },
  {
    type: "Townsfolk",
    name: "Fortune Teller",
    power:
      "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
  },
  {
    type: "Townsfolk",
    name: "Undertaker",
    power: "Each night, you learn which character died by execution today.",
  },
  {
    type: "Townsfolk",
    name: "Monk",
    power: "Each night, choose a player (not yourself): they are safe from the Demon tonight.",
  },
  {
    type: "Townsfolk",
    name: "Ravenkeeper",
    power: "If you die at night, you are woken to choose a player: you learn their character.",
  },
  {
    type: "Townsfolk",
    name: "Virgin",
    power:
      "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
  },
  {
    type: "Townsfolk",
    name: "Slayer",
    power:
      "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
  },
  {
    type: "Townsfolk",
    name: "Soldier",
    power: "You are safe from the Demon.",
  },
  {
    type: "Townsfolk",
    name: "Mayor",
    power:
      "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
  },
  {
    type: "Outsider",
    name: "Butler",
    power:
      "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
  },
  {
    type: "Outsider",
    name: "Saint",
    power: "If you die by execution, your team loses.",
  },
  {
    type: "Outsider",
    name: "Recluse",
    power: "You might register as evil & as a Minion or Demon, even if dead.",
  },
  {
    type: "Outsider",
    name: "Drunk",
    power:
      "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
  },

  {
    type: "Minion",
    name: "Poisoner",
    power: "Each night, choose a player: they are poisoned tonight and tomorrow day.",
  },
  {
    type: "Minion",
    name: "Spy",
    power:
      "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
  },
  {
    type: "Minion",
    name: "Baron",
    power: "There are extra Outsiders in play. [+2 Outsiders]",
  },
  {
    type: "Minion",
    name: "Scarlet Woman",
    power:
      "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count)",
  },

  {
    type: "Demon",
    name: "Imp",
    power:
      "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
  },
];

export const STATES = [
  "Dead",
  "Master",
  "Die",
  "Minion (Investigator)",
  "Decoy (Investigator)",
  "Decoy (Fortune Teller)",
  "Decoy (Washerwoman)",
  "Decoy (Librarian)",
  "Outsider (Librarian)",
  "Townsfolk (Washerwoman)",
  "Protected",
  "Poisoned",
  "Demon",
  "Used",
  "Executed",
  "Drunk",
];
