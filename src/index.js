import {API_URL, URL} from './config';

const main = document.querySelector('main.posts');

getPosts();

function elapsedDaysFrom(timestamp) {
  const fromDate = new Date(timestamp);
  const currentDate = new Date();
  const difference = currentDate - fromDate;
  return Math.round(difference / 1000 / 60 / 60 / 24);
}

document.querySelector('.submit').onclick = (e) => {
  e.preventDefault();
  location.href = URL + "/dist/submit.html";
}

function getPosts() {
  fetch(API_URL + "/posts")
    .then(response => response.json())
    .then(posts => {
      posts
        .map(post => createPost(post.score, post.title, elapsedDaysFrom(post.timestamp), post.author || "anonymus"))
        .forEach(post => main.appendChild(post));
    });
}

function createPost(vote, title, days, author) {
  const article = document.createElement('article');
  article.setAttribute('class', 'post');
  
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'vote-box');
  
  const img1 = document.createElement('img');
  img1.src = 'img/upvote.png';
  img1.classList.add('upvote');
  
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'vote');
  p1.textContent = vote;
  
  const img2 = document.createElement('img');
  img2.setAttribute('src', 'img/downvote.png');
  img2.setAttribute('class', 'downvote');
  
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'content-box');

  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'post-title');
  h3.textContent = title;

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'info');
  p2.textContent = `submitted ${days} days ago by ${author}`;

  const a1 = document.createElement('a');
  a1.setAttribute('class', 'link');
  a1.setAttribute('href', '#');
  a1.textContent = 'modify';

  const a2 = document.createElement('a');
  a2.setAttribute('class', 'link');
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