import _ from 'lodash';
import './index.css';
import './index.html';

function component() {
  const element = document.createElement('div');

    // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'my gywebpack'], ' ');

  return element;
}

document.body.appendChild(component());