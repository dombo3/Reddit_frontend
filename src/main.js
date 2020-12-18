import {URL} from './config';
import Auth from './auth';

Auth.auth();

const sprite = document.querySelector('.sprite');

sprite.onclick = () => {
  location.href = URL + "/dist";
}