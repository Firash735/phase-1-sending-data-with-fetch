function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      document.body.innerHTML = `<h2>User created with id: ${data.id}</h2>`;
      return data.id;
    })
    .catch(error => {
      document.body.innerHTML = `<h2>Oops! Error: ${error.message}</h2>`;
    });
  }