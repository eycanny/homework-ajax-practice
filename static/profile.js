function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    // salary: document.querySelector('select[name="salary"]').value,
    // educationLevel: document.querySelector('select[name="education"]').value,
    // state: document.querySelector('#state-field').value,
    // cityType: document.querySelector('input[name="city"]').value,
    // gardening: document.querySelector('input[name="garden"]').value,
    // tvHours: document.querySelector('select[name="tv"]').value,
  };

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      document
      .querySelector('#profiles')
      .insertAdjacentHTML(
        'beforeend',
        `<li>${responseJson.fullname} the ${responseJson.occupation} is ${responseJson.age}.</li>`
      );
    });
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
