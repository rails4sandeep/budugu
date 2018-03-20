//declarations
const TeleBot = require('telebot');

let path = require('path');
const config = require(path.join(__dirname, '../config/data'));

//const tokens = require(path.join(__dirname, '../config/tokens'));
//const bot = new TeleBot(tokens.suryakantham);
const bot = new TeleBot(process.env.TELEGRAM_TOKEN_SURYAKANTHAM);

const bannedWords = config.suryakantham.bannedWords;
const favoriteWords = config.suryakantham.favoriteWords;
const visasAdwords = config.suryakantham.visasAdwords;

let goodWordFlag = true;
let badWordFlag = true;
let visasAdwordsFlag = true;

//bot responses
bot.on('text', (msg) => {

    cheppandi(msg);
    bannedWordsWarning(msg,bannedWords);
    goodWordsAppreciation(msg, favoriteWords);
    sankrantiSpecial(msg);
    apply4Study(msg,visasAdwords);

    //reset flags
    goodWordFlag = true;
    badWordFlag = true;
    visasAdwordsFlag = true;
});

//start the bot
bot.start();

//evarumeeru command response
bot.on('/evarumeeru', (msg) => {
    aboutMe(msg);
  });


//methods
let cheppandi = (msg) => {
    if(msg.text.toLowerCase().includes('cheppandi')) {
        msg.reply.text(config.suryakantham.cheppandi);
    }
};  

let bannedWordsWarning = (msg, bannedWords) => {
    bannedWords.forEach((badWord) => {
        if(msg.text.toLowerCase().includes(badWord) && badWordFlag) {
            msg.reply.text('Hi ' + msg.from.first_name + ' garu, ' + config.suryakantham.bannedWordsWarning);
            badWordFlag = false;
        }
    });
};

let goodWordsAppreciation = (msg, favoriteWords) => {
    favoriteWords.forEach((goodWord) => {
        if(msg.text.toLowerCase().includes(goodWord) && goodWordFlag) {
            msg.reply.text(config.suryakantham.goodWordsAppreciation);
            goodWordFlag = false;            
        }
    });
};

let sankrantiSpecial = (msg) => {
    if(msg.text.toLowerCase().includes('manam sankranti sambaraalu')) {
        msg.reply.text(config.suryakantham.sankrantiSpecial);
    }
};

let aboutMe = (msg) => {
    msg.reply.text(config.suryakantham.aboutMe);
};

let apply4Study = (msg, visasAdwords) => {
    visasAdwords.forEach((visasAdword) => {
        if(msg.text.toLowerCase().includes(visasAdword) && visasAdwordsFlag) {
            msg.reply.text(config.suryakantham.apply4study);
            visasAdwordsFlag = false;            
        }
    });
};

