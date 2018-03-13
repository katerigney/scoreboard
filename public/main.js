const team1_addName = document.querySelector(".team1-name");

const addTeamName1 = () => {  
  let team1_submit = document.querySelector("#team1_submit").value;
  team1_addName.textContent = team1_submit;
}

const team2_addName = document.querySelector(".team2-name");

const addTeamName2 = () => {  
  let team2_submit = document.querySelector("#team2_submit").value;
  team2_addName.textContent = team2_submit;
}

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