let games = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo", games.length);

let first = games[2 - 2];
let latest = games[games.length - 1];

console.log({ first, latest });

games.forEach((item, indexList, arrayList) => {
  console.log({ item, indexList, arrayList });
});

let newGame = games.push("F-zero");
console.log({ newGame, games });

newGame = games.unshift("Fire Emblem");
console.log({ newGame, games });

let gameDelete = games.pop();
console.log({ gameDelete, games });

let one = 1;

let gamesDelete = games.splice(one, 2);
console.log({ gamesDelete, games });

let metroidIndex = games.indexOf("Metroid"); // CaSeSeNsItIvE
console.log({ metroidIndex });
