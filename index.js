const Discord = require("discord.js");
const Token = "NDAwMzQ2OTA5MTk1MzcwNDk2.DTaTog.CiVW0TDjPpYlSxw5EpLrSWzuB_I";
const Prefix = "."

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Helpy Has Been Activated! (Copyright Afton Robotics & RetroCode72)")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(Prefix)) return;
    
    var args = message.content.substring(Prefix.length).split(" ");

    switch (args[0]) {
        //Copy This Lines And Duplicate Them For The Commands
        case "help":
        message.channel.send("I See You Need Help About Me. Let Me Introduce Myself: Im Helpy, A Bot Designed By CallofBlox72 To Help New Users Get Started In This Server, And Sometimes Just Have Fun! My Maker Will Make More Commands For Me, Just Ask Him What Commands Would You Like!");
        break;
        //Copy This Lines And Duplicate Them For The Commands
        case "gotw":
        message.channel.send("The Game Of The Week (As The Name Says) Will Select The Best Game Made By Any Of YOU. There Will Be No Price, But A Mention And My Maker´s Help");
        break;
        //Copy This Lines And Duplicate Them For The Commands
        case "cmds":
            var embed = new Discord.RichEmbed()
                .setDescription("Here´s A List Of Commands I Have Been Programmed To Perform:")
                .addField(".cmds", "Gives A List Of Commands")
                .addField(".help", "Gives Some Information About The Bot")
                .addField(".gotw", "Shows The Game Of The Week")
            message.channel.send(embed);
    }
});

bot.login(Token);