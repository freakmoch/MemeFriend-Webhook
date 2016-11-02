const DiscordWebhook = require("discord-webhooks");
var prompt = require('prompt');

var webhookURL = "webhookurlhere";

let myWebhook = new DiscordWebhook(webhookURL)

myWebhook.on("ready", () => {
	prompt.start();
	prompt.get(['message'], function (err, result) {
		myWebhook.execute({
			content: result.message
  	  });
		console.log("Message Sent. Exiting...");
 	});
	
});

myWebhook.on("error", (error) => {
  console.warn(error);
});


