export default async function getTheData() {
  const scoreboard = document.querySelector('.scores');
  scoreboard.textContent = '';

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RP7P3DgAooG12Jvz9hXa/scores')
    .then((res) =>  res.json())
    .then((data) => {
      data.result.forEach((entry) => {
        const score = document.createElement('li');
        score.textContent = `${entry.user} : ${entry.score}`;
        scoreboard.appendChild(score);
      });
    });

  return response;

}