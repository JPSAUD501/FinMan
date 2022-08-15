import { TheFinManBot } from "./TheFinMan_Bot/bot";

class StartSequence {
  static async start() {
    console.log(`Loading the start sequence`);

    const theFinManBot = new TheFinManBot();

    console.log(`Running the start sequence...`);

    await theFinManBot.start();
    await theFinManBot.hear();

    console.log(`Start sequence completed`);
  }
}

StartSequence.start();
