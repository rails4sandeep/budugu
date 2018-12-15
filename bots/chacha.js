const TeleBot = require('telebot');

let path = require('path');
const config = require(path.join(__dirname, '../config/data'));

//const tokens = require(path.join(__dirname, '../config/tokens'));
//const bot = new TeleBot(tokens.chacha);
const bot = new TeleBot(process.env.TELEGRAM_TOKEN_CHACHA);
bot.on('text', (msg) => {
    chacha(msg);
});

//bot.on('photo', (msg) => photo(msg));

bot.start();

bot.on('newChatMembers', (msg) => newChatMembers(msg));

let chacha = (msg) => {
    if(msg.text.toLowerCase().includes('chacha')) {
        msg.reply.text(config.chacha.thanks);
    }
};

let photo = (msg) => {
    msg.reply.text('good one ' + msg.from.first_name);
};

let newChatMembers = (msg) => {
    msg.reply.text('Welcome '  + msg.new_chat_members[0].first_name + ' ' + config.chacha.welcome);
};