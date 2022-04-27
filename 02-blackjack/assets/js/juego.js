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
  machinePoints = 0;

// Referencias del HTML
const btnAsk = document.querySelector("#btnAskForAletter");
const btnStop = document.querySelector("#btnStop");
const btnNewGame = document.querySelector("#btnNewGame");

const divLetterPlayer = document.querySelector("#jugador-cartas");
const divLetterMachine = document.querySelector("#computadora-cartas");

const smallsPoints = document.querySelectorAll("small");

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

// valor de la cata
const letterValue = (letter) => {
  const value = letter.substring(0, letter.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
};

// turno de la computadora
const computerShift = (minPoints) => {
  do {
    const letter = takeLetter();

    machinePoints = machinePoints + letterValue(letter);

    smallsPoints[1].innerText = machinePoints;

    // <img class="carta" src="assets/cartas/2C.png" />
    // add imgLetter
    const imgLetter = document.createElement("img");
    imgLetter.src = `assets/cartas/${letter}.png`; // 3H, 2D ...
    imgLetter.classList.add("carta");
    divLetterMachine.append(imgLetter);

    if (minPoints > 21) {
      break;
    }
  } while (machinePoints < minPoints && minPoints <= 21);

  setTimeout(() => {
    if (machinePoints === minPoints) {
      alert("Nadie gana!");
    } else if (minPoints > 21) {
      alert("Computadora gana!");
    } else if (machinePoints > 21) {
      alert("Jugador gana!");
    } else {
      alert("Computadora gana!");
    }
  }, 1000);
};

// Eventos
btnAsk.addEventListener("click", () => {
  const letter = takeLetter();

  playerPoints = playerPoints + letterValue(letter);

  smallsPoints[0].innerText = playerPoints;

  // <img class="carta" src="assets/cartas/2C.png" />
  // add imgLetter
  const imgLetter = document.createElement("img");
  imgLetter.src = `assets/cartas/${letter}.png`; // 3H, 2D ...
  imgLetter.classList.add("carta");
  divLetterPlayer.append(imgLetter);

  if (playerPoints > 21) {
    console.warn("GAME OVER!");
    btnAsk.disabled = true;
    btnStop.disabled = true;
    computerShift(playerPoints);
  } else if (playerPoints === 21) {
    console.info("YOU WIN!");
    btnAsk.disabled = true;
    btnStop.disabled = true;
    computerShift(playerPoints);
  }
});

btnStop.addEventListener("click", () => {
  btnAsk.disabled = true;
  btnStop.disabled = true;

  computerShift(playerPoints);
});

btnNewGame.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = createDeck();
  playerPoints = 0;
  machinePoints = 0;

  smallsPoints[0].innerText = 0;
  smallsPoints[1].innerText = 0;

  divLetterPlayer.innerHTML = "";
  divLetterMachine.innerHTML = "";

  btnAsk.disabled = false;
  btnStop.disabled = false;
});
