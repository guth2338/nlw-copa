function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            <li>
             ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "17 / 02",
    "sexta",
    createGame("brazil", "16:00", "serbia") +
      createGame("uruguay", "18:00", "portugal")
  ) +
  createCard(
    "18 / 02",
    "sábado",
    createGame("portugal", "17:00", "ghana") +
      createGame("uruguay", "21:00", "south_korea")
  ) +
  createCard(
    "20 / 02",
    "segunda",
    createGame("switzerland", "08:30", "cameroon") +
      createGame("brazil", "10:30", "uruguay")
  )
