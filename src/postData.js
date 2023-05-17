export default async function postTheData() {
  const scoreForm = document.querySelector('.score-form');

  const formData = new FormData(scoreForm);
  const data = Object.fromEntries(formData);

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RP7P3DgAooG12Jvz9hXa/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}