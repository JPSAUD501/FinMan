import { Telegraf } from 'telegraf';
import config from './config';

export class TheFinManLogBot {
  bot: Telegraf;
  messageQueue: string[];

  constructor() {
    this.bot = new Telegraf(config.telegram.token);
    this.messageQueue = [];

    console.log(`TheFinManLog_Bot - Loaded`);
  }

  async start() {
    await this.bot.launch();

    this.startLogQueue();

    console.log(`TheFinManLog_Bot - Started`);

    process.once('SIGINT', () => this.bot.stop('SIGINT'))
    process.once('SIGTERM', () =>this.bot.stop('SIGTERM'))
  }

  sendLog(log: any) {
    this.messageQueue.push('🔵 ' + log.toString());
  }

  sendError(error: any) {
    this.messageQueue.push('🔴 ' + error.toString());
  }

  startLogQueue() {
    setInterval(async () => {
      if (this.messageQueue.length <= 0) return;
      try {
        await this.bot.telegram.sendMessage(config.telegram.logChannel, this.messageQueue[0]);
        this.messageQueue.shift();
      } catch (error) {
        console.log(error);
      }
    } , 1000);
  }
}