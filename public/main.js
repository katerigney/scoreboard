
let count_team1 = 0;

const addScore1 = () => {
  count_team1 = count_team1 + 1
  const teamScore1add = document.querySelector(".team1-score");
  teamScore1add.textContent = count_team1;
}

const subScore1 = () => {
  count_team1 = count_team1 - 1;
  const teamScore1sub = document.querySelector(".team1-score");
  teamScore1sub.textContent = count_team1;
}


let count_team2 = 0;

const addScore2 = () => {
  count_team2 = count_team2 + 1
  const teamScore2add = document.querySelector(".team2-score");
  teamScore2add.textContent = count_team2;
}

const subScore2 = () => {
  count_team2 = count_team2 - 1;
  const teamScore2sub = document.querySelector(".team2-score");
  teamScore2sub.textContent = count_team2;
}
