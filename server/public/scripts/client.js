console.log('client.js sourced');

$(document).ready(onReady);

const jokeObject = {
  whoseJoke: null,
  jokeQuestion: null,
  punchLine: null,
};

function onReady() {
  console.log('DOM ready');
  $('#addJokeButton').on('click', sendJoke);
  getJokes();
}

function sendJoke() {
  jokeObject.whoseJoke = $('#whoseJokeIn').val();
  jokeObject.jokeQuestion = $('#questionIn').val();
  jokeObject.punchLine = $('#punchlineIn').val();
  postJokes();
}
function postJokes() {
  $.ajax({
    method: 'POST',
    url: '/api/jokes',
    data: jokeObject,
  }).then((response) => {
    console.log('post joke: ', response);
  });
  getJokes();
}

function getJokes() {
  $.ajax({
    type: 'GET',
    url: '/api/jokes',
  }).then((response) => {
    console.table(response);
    render(response);
  });
}
function render(jokeList) {
  $('#whoseJokeIn').val('');
  $('#questionIn').val('');
  $('#punchlineIn').val('');

  $('#outputDiv').empty();
  for (let joke of jokeList) {
    $('#outputDiv').append(
      `<li>${joke.whoseJoke}: ${joke.jokeQuestion} ${joke.punchLine}</li>`
    );
  }
}
