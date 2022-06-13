async function dreamFormHandler(event) {
    event.preventDefault();

    const dream_location = document.querySelector('text[name="dream_location"]').value;
    const dream_season = document.querySelector('input[name="dream_season"]').value;
    const dream_year = document.querySelector('radio[name="dream_year"]').value;
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
      dream_year
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

console.log('woo');
};

document.querySelector('.form-dream').addEventListener('submit', dreamFormHandler);