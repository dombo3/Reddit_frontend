import { API_URL, URL } from './config';
import {elapsedDaysFrom} from './util';
import postController from './postController';

render();

async function render() {
  const main = document.querySelector('main.posts');
  const submitButton = document.querySelector('.submit');

  const posts = await postController.getAllPost();
  if (posts) {
    const articles = posts.map(post => articleFrom(post));
    articles.forEach(article => main.appendChild(article));
    registerEventListenersFor(posts);
  }
 
  submitButton.onclick = (e) => {
    e.preventDefault();
    location.href = URL + "/dist/edit.html";
  }
}

function registerEventListenersFor(posts) {
  posts.forEach(post => {
    const article = document.querySelector(`article[data-id="${post.id}"]`);
    
    const upVoteButton = article.querySelector('.upvote');
    upVoteButton.addEventListener('click', (e) => {
      postController.upVote(post.id).then(post => {
          article.querySelector('.vote').innerText = post.score;
        }
      );
    });

    const downVoteButton = article.querySelector('.downvote');
    downVoteButton.addEventListener('click', (e) => {
       postController.downVote(post.id).then(post =>
        article.querySelector('.vote').innerText = post.score);
    });

    const remove = article.querySelector('.remove');
    remove.addEventListener('click', (e) => {
      e.preventDefault();
      postController.delete(post.id).then(() => {
        article.remove();
      })
    })
  });
}

function articleFrom(post) {
  const article = document.createElement('article');
  article.setAttribute('class', 'post');
  article.setAttribute('data-id', post.id);

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'vote-box');

  const img1 = document.createElement('img');
  img1.src = 'img/upvote.png';
  img1.classList.add('upvote');

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'vote');
  p1.textContent = post.score;

  const img2 = document.createElement('img');
  img2.setAttribute('src', 'img/downvote.png');
  img2.setAttribute('class', 'downvote');

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'content-box');

  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'post-title');
  h3.textContent = post.title;

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'info');
  const days = elapsedDaysFrom(post.timestamp);
  p2.textContent = `submitted ${days} days ago by ${post.author || "anonymus"}`;

  const a1 = document.createElement('a');
  a1.setAttribute('class', 'link modify');
  a1.setAttribute('href', `${URL}/dist/edit.html?id=${post.id}`);
  a1.textContent = 'modify';

  const a2 = document.createElement('a');
  a2.setAttribute('class', 'link remove');
  a2.setAttribute('href', '#');
  a2.textContent = 'remove';

  div1.appendChild(img1);
  div1.appendChild(p1);
  div1.appendChild(img2);

  div2.appendChild(h3);
  div2.appendChild(p2);
  div2.appendChild(a1);
  div2.appendChild(a2);

  article.appendChild(div1);
  article.appendChild(div2);

  return article;
};