import { API_URL, URL } from './config';

document.querySelector('#button-post-submit').onclick = async (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const url = document.querySelector('#url');

  title.focus();

  if (document.forms[0].checkValidity()) {
    const data = {
      title: title.value,
      url: url.value,
    }

    await fetch(API_URL + "/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    location.href = URL + "/dist/index.html";
  }
}