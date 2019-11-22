const BASE_API_URL = 'https://api.quwi.com/v2/';
const axios = require('axios');

export async function loginApi({ email, password }) {
  return axios.post(`${BASE_API_URL}auth/login`, {
      "email": email,
      "password": password,
    })
    .then(function (response) {
      return response.data.token;
    })
    .catch(function (error) {
      console.log(error);
  });
};

export async function logOutApi({ token }) {
  return axios.post(`${BASE_API_URL}auth/logout`, { "anywhere": false }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
    .then(function (response) {
      console.log(1111, response);

      return response;
    })
    .catch(function (error) {
      console.log(error);
  });
};

export async function getListOfProject(token) {
  return axios.get(`${BASE_API_URL}projects-manage/index`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.data.projects;
    })
    .catch(function (error) {
      return error;
    });
};

export async function editProject({ token, id, email, password, newName }) {
  const fd = new FormData();
  fd.append('name', newName);

  return axios.post(`${BASE_API_URL}projects-manage/update?id=${id}`, fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    })
    .then(function (response) {
      console.log(response);

      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};