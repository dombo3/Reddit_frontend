import { API_URL } from './config';
import handleError from './errorHandler';

export default {

  getOnePost: function(id) {
    return fetch(API_URL + `/posts/${id}`)
      .then(response => response.json())
      .catch(error => handleError(error));
  },

  getAllPost: function() {
    return fetch(API_URL + "/posts")
      .then(response => response.json())
      .catch(error => handleError(error));
  },

  updatePost: function(post) {
    return fetch(API_URL + `/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(response => response.json())
    .catch(error => handleError(error));
  },

  createPost: function(post) {
    return fetch(API_URL + "/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(response => response.json())
    .catch(error => handleError(error));
  },

  upVote: function(id) {
    return fetch(API_URL + `/posts/${id}/upvote`, { method: 'PUT', })
      .then(response => response.json())
      .catch(error => handleError(error));
  },

  downVote: function(id) {
    return fetch(API_URL + `/posts/${id}/downvote`, { method: 'PUT', })
      .then(response => response.json())
      .catch(error => handleError(error));
  },

  delete: function(id) {
    return fetch(API_URL + `/posts/${id}`, { method: 'DELETE', })
      .catch(error => handleError(error));
  }
}
