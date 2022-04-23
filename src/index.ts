import { Client, Intents } from "discord.js";
import {
  interactionCreateListener,
  registerCommands,
} from "./listeners/interaction-create-listener";
import { token } from "./config";
import { readyListener } from "./listeners/ready-listener";
import { messageReactionAddListener } from "./listeners/message-reaction-add-listener";

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "REACTION"],
});

client.login(token);
client.on("interactionCreate", interactionCreateListener);
client.on("messageReactionAdd", messageReactionAddListener);
client.on("ready", readyListener);

registerCommands();
