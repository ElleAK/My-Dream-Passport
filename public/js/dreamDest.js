async function dreamFormHandler(event) {
    event.preventDefault();

    const dream_location = document.querySelector('text[name="dream_location"]').value;
    const dream_season = document.querySelector('input[name="dream_season"]').value;
    const dream_year = document.querySelector('radio[name="dream_year"]').value;

const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      dream_location,
      dream_season,
      dream_year
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
      // dashboard??? do we even need lines 19-23?
    document.location.replace('/dream');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-dream-form').addEventListener('submit', newFormHandler);