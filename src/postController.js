import { API_URL } from './config';
import handleError from './errorHandler';

export default {

  getOnePost: function (id, username) {
    return fetch(API_URL + `/posts/${id}`, {
      headers: {
        'Username': username,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("error in get request");
        }
      })
      // .catch(error => handleError(error));
  },

  getAllPost: function () {
    return fetch(API_URL + "/posts")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .catch(error => handleError(error));
  },

  updatePost: function (post, username) {
    return fetch(API_URL + `/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Username': username,
      },
      body: JSON.stringify(post)
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
    })
      .catch(error => handleError(error));
  },

  createPost: function (post, username) {
    return fetch(API_URL + "/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Username': username,
      },
      body: JSON.stringify(post)
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
    })
      .catch(error => handleError(error));
  },

  upVote: function (id) {
    return fetch(API_URL + `/posts/${id}/upvote`, { method: 'PUT', })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .catch(error => handleError(error));
  },

  downVote: function (id) {
    return fetch(API_URL + `/posts/${id}/downvote`, { method: 'PUT', })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .catch(error => handleError(error));
  },

  delete: function (id, username) {
    return fetch(API_URL + `/posts/${id}`, {
      method: 'DELETE', 
      headers: {
        'Username': username,
      },
    })
      .catch(error => handleError(error));
  }
}
