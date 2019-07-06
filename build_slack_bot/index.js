const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-688433416023-688434267271-vA8X3fTonyiKXqFcoDL7ENfp',
  name: 'jokebot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  }

  bot.postMessageToChannel('general', 'Get Ready To Laugh With @Jokebot!', params);
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
  if(data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Respond to Data
function handleMessage(message) {
  if(message.includes(' chucknorris')) {
    chuckJoke();
  } else if(message.includes(' yomoma')) {
    yoMomaJoke();
  } else if(message.includes(' random')) {
    randomJoke();
  } else if (message.includes(' help')) {
    runHelp();
  }
}

// Tell a Chuck Norris Joke
function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random')
    .then(res => {
      const joke = res.data.value.joke;

      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel('general', `Chuck Noris: ${joke}`, params);
    })
}

// Tell a yo mama Joke
function yoMomaJoke() {
  axios.get('http://api.yomomma.info')
    .then(res => {
      const joke = res.data.joke;

      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel('general', `Yo Moma: ${joke}`, params);
    })
}

// Tell a random joke
function randomJoke() {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand === 1) {
    chuckJoke();
  } else if (rand === 2) {
    yoMomaJoke();
  }
}

// Show help text
function runHelp() {
  const params = {
    icon_emoji: ':question:'
  }

  bot.postMessageToChannel('general', `Type @jokebot with either 'chucknorris', 'yomoma', or 'random' to get a joke`, params);
}