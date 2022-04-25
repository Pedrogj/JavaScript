/*
 * 2C = Two of Clubs
 * 2D = Two of Diamonsd
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const typesCards = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

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

  //console.log(deck);

  deck = _.shuffle(deck);
  // console.log(deck);

  return deck;
};

createDeck();

// Funcion para tomar 1 carta
const takeLetter = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const letter = deck.pop();

  console.log(deck);
  console.log(letter);

  return letter;
};

takeLetter();

// Pedir Carta
const letterValue = (letter) => {
  const value = letter.substring(0, letter.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
};

const value = letterValue(takeLetter());
console.log({ value });
