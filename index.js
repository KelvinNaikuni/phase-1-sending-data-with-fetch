// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };
  fetch("http://localhost:3000/users", configObject);
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };
  return fetch("http://localhost:3000/users", configObject)
  .then(response => response.json())
  .then(data => {
    // Append the new ID to the DOM
    document.body.innerHTML = data.id;
  })
  .catch(error => {
    // Handle and display errors
    document.body.innerHTML = error.message;
  });
}





