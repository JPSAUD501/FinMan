import { AdvConsole } from "./Functions/advancedConsole";
import { Server } from "./Server/server";
import { TheFinManLogBot } from "./TheFinManLog_Bot/bot";
import { TheFinManBot } from "./TheFinMan_Bot/bot";

class StartSequence {
  static async start() {
    
    console.log("Starting TheFinManLog_Bot and AdvConsole...");
    const theFinManLogBot = new TheFinManLogBot();
    await theFinManLogBot.start();
    const advConsole = new AdvConsole(theFinManLogBot);
    console.log("TheFinManLog_Bot and AdvConsole started!");

    advConsole.log(`Running the start sequence...`);
    const server = new Server(advConsole);
    await server.start();
    const theFinManBot = new TheFinManBot(advConsole);
    await theFinManBot.start();
    await theFinManBot.hear();
    advConsole.log(`Start sequence completed`);
  }
}

StartSequence.start();
