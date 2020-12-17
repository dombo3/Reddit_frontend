import {URL} from './config';

const sprite = document.querySelector('.sprite');

sprite.onclick = () => {
  location.href = URL + "/dist";
}