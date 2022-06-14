const visitedFormHandler = async (event) => {
    event.preventDefault();
  
    const visited_location = document.querySelector('#visited-location').value;
    const visited_departure = document.querySelector('#ddate').value;
    const visited_returnDate = document.querySelector('#rdate').value;
    // boolean for return? or option for the next one??
    // const visited_return = document.querySelector('boolean[name="visited_return"]').value;
    const visited_transportation = document.querySelector('#visited-transportation').value;
    const visited_description = document.querySelector('#description').value;
    const visited_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if(visited_location) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        visited_id,
        visited_location,
        visited_departure,
        visited_returnDate,
        // visited_return,
        visited_transportation,
        visited_description
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
}
  
  document.querySelector('.form-trip').addEventListener('submit', visitedFormHandler);
  