const TeleBot = require('telebot');
const bot = new TeleBot('535241451:AAFdc2dpzWl9Q0rlEuRamlCwxOuvbbmlI20');
const bannedWords = ['fuck','asshole','ysr','jagan','chandrababu','chandrababu naidu','chandra babu naidu','lokesh','tdp','kcr','ktr','trs','free voucher','freevoucher','rajasekhar reddy','చంద్రబాబు','cheppandi'];
const favoriteWords = ['opportunity','openings','job','jobs','opening','role','roles'];
let goodWordFlag = true;
let badWordFlag = true;
bot.on('text', (msg) => {
    bannedWords.forEach((badWord) => {
        if(msg.text.toLowerCase().includes(badWord) && badWordFlag) {
            msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & clean. Thank you');
            badWordFlag = false;
        }
    });
    
    favoriteWords.forEach((goodWord) => {
        if(msg.text.toLowerCase().includes(goodWord) && goodWordFlag) {
            msg.reply.text("👍");
            goodWordFlag = false;            
        }
    });
    goodWordFlag = true;
    badWordFlag = true;
});

bot.start();

bot.on('cheppandi', (msg) => {
    msg.reply.text('cheppadaniki emi ledu pani chusukondi');
  });

  bot.on('/evarumeeru', (msg) => {
    msg.reply.text('I am the official moderator of MANAM telegram group. I will take care of the group. I appreciate good posts & inform when posts are in violation of MANAM policies');
  });


