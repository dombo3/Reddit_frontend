import { API_URL } from './config';

export default {
  getAllPost: async function () {
    const posts = await fetch(API_URL + "/posts")
      .then(response => response.json());
    return posts;
  },

  upVote: async function (id) {
    const post = await fetch(API_URL + `/posts/${id}/upvote`, { method: 'PUT', })
      .then(response => response.json());
    return post;
  },

  downVote: async function (id) {
    const post = await fetch(API_URL + `/posts/${id}/downvote`, { method: 'PUT', })
      .then(response => response.json());
    return post;
  }
}
