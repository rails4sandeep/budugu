const TeleBot = require('telebot');
const bot = new TeleBot('547814548:AAHTmQHNMzDxNPGHb0q4Z2wsLI-eiavtbHY');

bot.on('text', (msg) => {
    budugu(msg);
});

bot.on('photo', (msg) => photo(msg));

bot.start();

bot.on('newChatMembers', (msg) => newChatMembers(msg));

let budugu = (msg) => {
    if(msg.text.toLowerCase().includes('budugu')) {
        msg.reply.text('thank you andi');
    }
};

let photo = (msg) => {
    msg.reply.text('good one ' + msg.from.first_name + ' garu');
};

let newChatMembers = (msg) => {
    msg.reply.text('Welcome '  + msg.new_chat_members[0].first_name + ' to MANAM - Mana Australia Telugu Association. Please share a small introduction about you to the group. You can find more information about MANAM at www.manam-au.org');
};