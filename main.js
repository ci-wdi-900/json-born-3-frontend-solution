const getUsers = () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  xhr.open('GET', 'http://localhost:3000/users');
  xhr.send();
}

const getUser = (id) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  xhr.open('GET', `http://localhost:3000/users/${id}`);
  xhr.send();
}

const getFriends = (id) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', (event) => {
    // Have to convert that JSON to an object before we can access its friends property. (JSON is just a string, it has no "properties"!)
    const user = JSON.parse(event.target.response) 
    console.log(user.friends);
  })

  xhr.open('GET', `http://localhost:3000/users/${id}`);
  xhr.send();
  
}

const postUser = (name, age, eyeColor) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  const newUser = {
    name,
    age,
    eyeColor,
    friends: [],
  }

  // The JSON we're sending.
  const data = JSON.stringify(newUser, null, 2);

  xhr.open('POST', `http://localhost:3000/users`);
  // Important step to telling it we're sending it JSON.
  xhr.setRequestHeader('Content-Type', 'application/json');
  // Send that JSON!
  xhr.send(data);
}

const updateUser = (id, key, value) => {
  const xhr = new XMLHttpRequest();

  // What to do once we've finished our GET.
  xhr.addEventListener('loadend', (event) => {
    // Now that we've gotten our user, we can start a request to update them.
    const xhr = new XMLHttpRequest();

    // Console log the updated user once the PUT request goes through.
    xhr.addEventListener('loadend', (event) => {
      console.log(event.target.response);
    })

    // Make that PUT request!

    // Grab the user we GETted.
    const user = JSON.parse(event.target.response);
    // Update its property.
    user[key] = value;
    // Back to JSON!
    const data = JSON.stringify(user, null, 2);

    // And... SEND IT.
    xhr.open('PUT', `http://localhost:3000/users/${id}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
  })

  // The GET request that starts it all...
  xhr.open('GET', `http://localhost:3000/users/${id}`);
  xhr.send();
}

// getUsers();
// getUser(4);
// getFriends(4);
// postUser('SolutionBot', 1.122, 'gunmetal grey')
// updateUser(4, 'name', 'Updated!')