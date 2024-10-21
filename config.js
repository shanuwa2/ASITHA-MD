const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=zmYWXLLB#lrVxzQTuaDFgbViac9vaw9SGvgarCNy7W7YkGkqV9kk",
MONGODB: process.env.MONGODB || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
