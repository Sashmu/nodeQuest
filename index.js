const aboutMe = require("./information");
const cowsay = require("cowsay");

 console.log(cowsay.say({
    text: "Hello I'm " + aboutMe.name + " from " + aboutMe.campus + " Campus!"
}));
