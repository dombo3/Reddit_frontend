import { URL } from './config';

export default {
  auth: function () {
    const loggedInUser = localStorage.getItem("Username");

    if (!loggedInUser) {
      location.href = URL + "/dist/login.html";
    }
  },

  login: function(username) {
    localStorage.setItem("Username", username);
  },

  getUser: function() {
    return localStorage.getItem("Username");
  }
};