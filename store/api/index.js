export async function getListOfProject(axios) {
  return axios.$get('projects-manage/index')
    .then(data => {
      return data.projects;
    })
    .catch(function (error) {
      return error;
    });
};

export async function editProject({ id, newName, axios }) {
  const fd = new FormData();
  fd.append('name', newName);

  return axios.post(`projects-manage/update?id=${id}`, fd, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};