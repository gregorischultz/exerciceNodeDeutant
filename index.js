const infotmation = require("./information");
const cowsay = require("cowsay");

const message = `salut je m'appele ${infotmation.nom} et mon campus ${infotmation.campus}!`;
console.log(cowsay.say({text: message}));