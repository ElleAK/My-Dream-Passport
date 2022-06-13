const dreamFormHandler = async (event) => {
    event.preventDefault();

    const dream_location = document.querySelector('#dream-location').value;
    const dream_season = document.querySelector('#dream-season').value;
    // const dream_year = document.querySelector('#within-year').value;
    const dream_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if(dream_location) {
const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      dream_id,
      dream_location,
      dream_season,
    //   dream_year
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

};

document.querySelector('.form-dream').addEventListener('submit', dreamFormHandler);