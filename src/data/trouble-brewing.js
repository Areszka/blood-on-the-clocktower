export const CHARACTERS = [
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Praczka", en: "Washerwoman" },
    power: {
      pl: "Na początku gry postać wie, że jedna z dwóch osób jest określonym Mieszczaninem.",
      en: "At the start of the game, the character knows that one of two players is a particular Townsfolk.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Bibliotekarz", en: "Librarian" },
    power: {
      pl: "Na początku gry postać wie, że jedna z dwóch osób jest określonym Wyrzutkiem. (Lub że żadnego nie ma w grze.)",
      en: "At the start of the game, the character knows that one of two players is a particular Outsider. (Or that zero are in play.)",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Śledczy", en: "Investigator" },
    power: {
      pl: "Na początku gry postać wie, że jedna z dwóch osób jest określonym Poplecznikiem.",
      en: "At the start of the game, the character knows that one of two players is a particular Minion.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Szef Kuchni", en: "Chef" },
    power: {
      pl: "Na początku gry postać wie, ile par złych graczy jest w grze.",
      en: "At the start of the game, the character knows how many pairs of evil players there are.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Empata", en: "Empath" },
    power: {
      pl: "Każdej nocy postać dowiaduje się, ilu z dwóch żywych sąsiadów jest złych.",
      en: "Each night, the character learns how many of their two alive neighbors are evil.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Wróżbita", en: "Fortune Teller" },
    power: {
      pl: "Każdej nocy postać wybiera dwie osoby i sprawdza, czy któraś z nich jest Demonem. W grze znajduje się dobry gracz, który rejestruje się jako Demon.",
      en: "Each night, the character chooses two players: they learn if either is a Demon. There is a good player that registers as a Demon to them.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Grabarz", en: "Undertaker" },
    power: {
      pl: "Każdej nocy postać dowiaduje się, jaka postać została dziś stracona.",
      en: "Each night, the character learns which character died by execution today.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Mnich", en: "Monk" },
    power: {
      pl: "Każdej nocy postać wybiera gracza (nie siebie), który jest chroniony przed Demonem tej nocy.",
      en: "Each night, the character chooses a player (not themselves): they are safe from the Demon tonight.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Strażnik Kruków", en: "Ravenkeeper" },
    power: {
      pl: "Jeśli nastąpi śmierć w nocy, postać budzi się i wybiera gracza, aby poznać jego postać.",
      en: "If the character dies at night, they are woken to choose a player: they learn their character.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Dziewica", en: "Virgin" },
    power: {
      pl: "Jeśli po raz pierwszy postać jest nominowana przez Mieszczanina, nominator zostaje natychmiast stracony.",
      en: "The 1st time the character is nominated, if the nominator is a Townsfolk, they are executed immediately.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Łowca Demonów", en: "Slayer" },
    power: {
      pl: "Raz na grę, w ciągu dnia, postać publicznie wybiera gracza – jeśli jest Demonem, umiera.",
      en: "Once per game, during the day, the character publicly chooses a player: if they are the Demon, they die.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Żołnierz", en: "Soldier" },
    power: {
      pl: "Postać nie może zostać zabita przez Demona.",
      en: "The character is safe from the Demon.",
    },
  },
  {
    type: { pl: "Mieszczanin", en: "Townsfolk" },
    name: { pl: "Burmistrz", en: "Mayor" },
    power: {
      pl: "Jeśli na koniec dnia pozostaje tylko trzech graczy i nie dochodzi do egzekucji, drużyna dobra wygrywa. Jeśli nastąpi śmierć w nocy, inny gracz może umrzeć zamiast.",
      en: "If only 3 players live & no execution occurs, the good team wins. If the character dies at night, another player might die instead.",
    },
  },
  {
    type: { pl: "Wyrzutek", en: "Outsider" },
    name: { pl: "Lokaj", en: "Butler" },
    power: {
      pl: "Każdej nocy postać wybiera gracza (nie siebie). Następnego dnia postać może głosować tylko wtedy, gdy wybrana osoba również głosuje.",
      en: "Each night, the character chooses a player (not themselves): the next day, the character may only vote if the chosen player is voting too.",
    },
  },
  {
    type: { pl: "Wyrzutek", en: "Outsider" },
    name: { pl: "Święty", en: "Saint" },
    power: {
      pl: "Jeśli postać zostaje stracona, drużyna dobra przegrywa.",
      en: "If the character dies by execution, the good team loses.",
    },
  },
  {
    type: { pl: "Wyrzutek", en: "Outsider" },
    name: { pl: "Pustelnik", en: "Recluse" },
    power: {
      pl: "Postać może rejestrować się jako zła oraz jako Poplecznik lub Demon, nawet po śmierci.",
      en: "The character might register as evil & as a Minion or Demon, even if dead.",
    },
  },
  {
    type: { pl: "Wyrzutek", en: "Outsider" },
    name: { pl: "Pijak", en: "Drunk" },
    power: {
      pl: "Postać nie wie, że jest Pijakiem. Wydaje się, że jest Mieszczaninem, ale tak naprawdę nie jest.",
      en: "The character does not know they are the Drunk. They think they are a Townsfolk, but they are not.",
    },
  },

  {
    type: { pl: "Poplecznik", en: "Minion" },
    name: { pl: "Truciciel", en: "Poisoner" },
    power: {
      pl: "Każdej nocy postać wybiera gracza, który zostaje zatruty na tę noc i następny dzień.",
      en: "Each night, the character chooses a player: they are poisoned tonight and tomorrow day.",
    },
  },
  {
    type: { pl: "Poplecznik", en: "Minion" },
    name: { pl: "Szpieg", en: "Spy" },
    power: {
      pl: "Każdej nocy postać może zobaczyć Grimuar. Postać może rejestrować się jako dobry gracz oraz jako Mieszczanin lub Wyrzutek, nawet po śmierci.",
      en: "Each night, the character sees the Grimoire. They might register as good & as a Townsfolk or Outsider, even if dead.",
    },
  },
  {
    type: { pl: "Poplecznik", en: "Minion" },
    name: { pl: "Baron", en: "Baron" },
    power: {
      pl: "W grze znajduje się więcej Wyrzutków. [+2 Wyrzutków]",
      en: "There are extra Outsiders in play. [+2 Outsiders]",
    },
  },
  {
    type: { pl: "Poplecznik", en: "Minion" },
    name: { pl: "Karmazynowa Kobieta", en: "Scarlet Woman" },
    power: {
      pl: "Jeśli żyje co najmniej 5 graczy i Demon umiera, postać staje się Demonem. (Podróżnicy się nie liczą)",
      en: "If there are 5 or more players alive & the Demon dies, the character becomes the Demon. (Travellers don't count)",
    },
  },

  {
    type: { pl: "Demon", en: "Demon" },
    name: { pl: "Imp", en: "Imp" },
    power: {
      pl: "Każdej nocy postać wybiera gracza, który umiera. Jeśli Imp zabije siebie w ten sposób, jeden z Popleczników staje się Impem.",
      en: "Each night, the character chooses a player: they die. If the character kills themselves this way, a Minion becomes the Imp.",
    },
  },
];

export const STATES = [
  { pl: "Martwy", en: "Dead" },
  { pl: "Pan", en: "Master" },
  { pl: "Poplecznik (Śledczy)", en: "Minion (Investigator)" },
  { pl: "Fałszywka (Śledczy)", en: "Decoy (Investigator)" },
  { pl: "Fałszywka (Wróżbita)", en: "Decoy (Fortune Teller)" },
  { pl: "Fałszywka (Praczka)", en: "Decoy (Washerwoman)" },
  { pl: "Fałszywka (Bibliotekarz)", en: "Decoy (Librarian)" },
  { pl: "Wyrzutek (Bibliotekarz)", en: "Outsider (Librarian)" },
  { pl: "Mieszczanin (Praczka)", en: "Townsfolk (Washerwoman)" },
  { pl: "Chroniony", en: "Protected" },
  { pl: "Zatruty", en: "Poisoned" },
  { pl: "Demon", en: "Demon" },
  { pl: "Użyty", en: "Used" },
  { pl: "Stracony", en: "Executed" },
  { pl: "Pijany", en: "Drunk" },
];
