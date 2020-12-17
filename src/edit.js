import { API_URL, URL } from './config';
import postController from './postController';
import Post from './Post';
import {getQueryParams} from './util';

const subtitle = document.querySelector('.subtitle');
const title = document.querySelector('#title');
const url = document.querySelector('#url');
const submitButton = document.querySelector('#button-post-submit');

let state = {
  edit: false,
}

const queryParams = getQueryParams();

if (queryParams.id) { 
  state.edit = true;
}

render();

async function render() {
  let post = {};
  
  if (state.edit) {
    subtitle.innerText = "EDIT POST";
    post = await postController.getOnePost(queryParams.id);
    title.value = post.title;
    url.value = post.url;
  }

  registerEventListener(post);
}

function registerEventListener(post) {
  submitButton.onclick = async (e) => {
    e.preventDefault();
    title.focus();

    if (document.forms[0].checkValidity()) {
      let p = undefined;
      if (state.edit) {
        post.title = title.value;
        post.url = title.url;
        p = await postController.updatePost(post);
      } else {
        p = await postController.createPost(new Post(title.value, url.value));
      }

      if (p) {
        location.href = URL + "/dist/index.html";
      }
    }
  }
}