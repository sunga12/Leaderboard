import './index.css';
import './index.html';
import postTheData from './postData.js';
import getTheData from './getData.js';

const refresh = document.querySelector('#refresh');
const submitGame = document.querySelector('#submit-score');

window.onload = getTheData();

refresh.addEventListener('click', () => {
  getTheData();
});

submitGame.addEventListener('click', (e) => {
  e.preventDefault();
  postTheData();
});