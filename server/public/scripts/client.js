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
}

function sendJoke() {
  jokeObject.whoseJoke = $('#whoseJokeIn').val();
  jokeObject.jokeQuestion = $('#questionIn').val();
  jokeObject.punchLine = $('#punchlineIn').val();

  $.ajax({
    method: 'POST',
    url: '/api/jokes',
    data: jokeObject,
  }).then((response) => {
    console.log('post joke: ', response);
  });
}

function render() {}
