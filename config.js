const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=b6IwXAbQ#q9pjzrLexSGA-qlxXHVeG7_llGgb97p6jbX_fhaKc8E",
MONGODB: process.env.MONGODB || "mongodb://mongo:ATUdNXYlCCXxOvdqUlXjWObNPwdkdpib@autorack.proxy.rlwy.net:42669",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
