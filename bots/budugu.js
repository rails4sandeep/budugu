const TeleBot = require('telebot');

let path = require('path');
const config = require(path.join(__dirname, '../config/data'));

//const tokens = require(path.join(__dirname, '../config/tokens'));
//const bot = new TeleBot(tokens.budugu);
const bot = new TeleBot(process.env.TELEGRAM_TOKEN_BUDUGU);
bot.on('text', (msg) => {
    budugu(msg);
});

bot.on('photo', (msg) => photo(msg));

bot.start();

bot.on('newChatMembers', (msg) => newChatMembers(msg));

let budugu = (msg) => {
    if(msg.text.toLowerCase().includes('budugu')) {
        msg.reply.text(config.budugu.thanks);
    }
};

let photo = (msg) => {
    msg.reply.text('good one ' + msg.from.first_name + ' garu');
};

let newChatMembers = (msg) => {
    msg.reply.text(msg.new_chat_members[0].first_name + ' గారు ' + config.budugu.welcomeTelugu +
     'Welcome '  + msg.new_chat_members[0].first_name + ' ' + config.budugu.welcomeEnglish);
};