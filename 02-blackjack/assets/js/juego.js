// Patrón Módulo
const myModule = (() => {
  "use strict";

  let deck = [];
  const typesCards = ["C", "D", "H", "S"];
  const specials = ["A", "J", "Q", "K"];

  // let playerPoints = 0,
  //   machinePoints = 0;

  let playersPoints = [];

  // Referencias del HTML
  const btnAsk = document.querySelector("#btnAskForAletter");
  const btnStop = document.querySelector("#btnStop");
  const btnNewGame = document.querySelector("#btnNewGame");

  const divLetterPlayers = document.querySelectorAll(".divCartas");

  const smallsPoints = document.querySelectorAll("small");

  // inicializar juego
  const gameInit = (players = 2) => {
    deck = createDeck();
    playersPoints = [];
    for (let i = 0; i < players; i++) {
      playersPoints.push(0);
    }

    smallsPoints.forEach((item) => (item.innerText = 0));
    divLetterPlayers.forEach((item) => (item.innerHTML = ""));

    btnAsk.disabled = false;
    btnStop.disabled = false;
  };

  // Esta funcion crea un nuevo deck
  const createDeck = () => {
    deck = [];
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

    return _.shuffle(deck);
  };

  // Funcion para tomar 1 carta
  const takeLetter = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    return deck.pop();
  };

  // valor de la cata
  const letterValue = (letter) => {
    const value = letter.substring(0, letter.length - 1);

    return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
  };

  // funcion para acumular puntos
  // shift: 0 = primer jugador y el último sera la computadora
  const accumulatePoints = (letter, shift) => {
    playersPoints[shift] = playersPoints[shift] + letterValue(letter);

    smallsPoints[shift].innerText = playersPoints[shift];
    return playersPoints[shift];
  };

  const createLetter = (letter, shift) => {
    const imgLetter = document.createElement("img");
    imgLetter.src = `assets/cartas/${letter}.png`; // 3H, 2D ...
    imgLetter.classList.add("carta");
    divLetterPlayers[shift].append(imgLetter);
  };

  // funcion para determinar jugador
  const playerWin = () => {
    const [machinePoints, minPoints] = playersPoints;

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

  // turno de la computadora
  const computerShift = (minPoints) => {
    let machinePoints = 0;
    do {
      const letter = takeLetter();
      machinePoints = accumulatePoints(letter, playersPoints.length - 1);
      createLetter(letter, playersPoints.length - 1);
    } while (machinePoints < minPoints && minPoints <= 21);

    playerWin();
  };

  // Eventos jugador
  btnAsk.addEventListener("click", () => {
    const letter = takeLetter();
    const playerPoints = accumulatePoints(letter, 0);
    createLetter(letter, 0);

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

    computerShift(playersPoints[0]);
  });

  btnNewGame.addEventListener("click", () => {
    gameInit();
  });

  return {
    playGame: gameInit,
  };
})();
