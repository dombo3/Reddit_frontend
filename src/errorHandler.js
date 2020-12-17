export default function handleError(error) {
  const div = document.createElement('div');
  div.classList.add('error');
  const p = document.createElement('p');
  const text = document.createTextNode(`Error: ${error}`);

  p.appendChild(text);
  div.appendChild(p);

  const body = document.querySelector('body');
  body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
}