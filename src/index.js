import _ from 'lodash';
import './index.css';
import './index.html';

const scores = [
  {
    name: 'Sunga',
    score: 100
  },
  {
    name: 'Felix',
    score: 90
  },
  {
    name: 'Christian',
    score: 80
  }
];

const scoreboard = document.querySelector('.scores');

scores.forEach((entry) => {

    const score = document.createElement('li');
    score.insertAdjacentHTML('beforeend', `${entry.name} : ${entry.score}`);
    scoreboard.appendChild(score);

})