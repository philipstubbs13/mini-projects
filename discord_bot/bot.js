require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
  partials: ["MESSAGE"]
})

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
  console.log('Our bot is ready to go')
})

client.on('messageDelete', msg => {
  msg.channel.send('Stop deleting messages')
})

client.on('message', msg => {
  if (msg.content == 'I love WDS') {
    msg.react('❤️')
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    // msg.channel.send("Not tagged")
    // msg.reply('Pong!')
    modUser(msg.member)
  }
})

function modUser(member) {
  member.roles.add('787848580568186921')
}

client.login(process.env.BOT_TOKEN)