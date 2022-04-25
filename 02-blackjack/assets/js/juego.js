/*
 * 2C = Two of Clubs
 * 2D = Two of Diamonsd
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const typesCards = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let playerPoints = 0,
  machine = 0;

// Referencias del HTML
const btnAsk = document.querySelector("#btnAskForAletter");
const smalls = document.querySelectorAll("small");

// Esta funcion crea un nuevo deck
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of typesCards) {
      deck.push(i + type);
    }
  }

  for (let type of typesCards) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

createDeck();

// Funcion para tomar 1 carta
const takeLetter = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const letter = deck.pop();

  return letter;
};

// Pedir Carta
const letterValue = (letter) => {
  const value = letter.substring(0, letter.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
};

// Eventos
btnAsk.addEventListener("click", () => {
  const letter = takeLetter();

  playerPoints = playerPoints + letterValue(letter);

  smalls[0].innerText = playerPoints;
});
