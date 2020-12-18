import { URL } from './config';
import Auth from './auth';

const sprite = document.querySelector('.sprite');
const loginButton = document.querySelector('#button-login');
const username = document.querySelector('#username');

sprite.onclick = () => {
  location.href = URL + "/dist";
}

loginButton.onclick = async (e) => {
  e.preventDefault();
  username.focus();

  if (document.forms[0].checkValidity()) {
    Auth.login(username.value);
    location.href = URL + "/dist/index.html";
  }
}
