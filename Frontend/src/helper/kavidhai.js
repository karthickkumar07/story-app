export const addPost = (post) => {
  console.log(post);
  return fetch(`http://localhost:7000/auth/addkavidhai`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getKavidhais = () => {
  return fetch(`http://localhost:7000/auth/allkavidhai`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const yourKavidhai = (name) => {
  return fetch(`http://localhost:7000/auth/allkavidhai/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
