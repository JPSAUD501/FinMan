import { Telegraf } from 'telegraf';
import config from './config';

export class TheFinManLogBot {
  bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(config.telegram.token);

    console.log(`TheFinManLog_Bot - Loaded`);
  }

  async start() {
    await this.bot.launch();

    console.log(`TheFinManLog_Bot - Started`);

    process.once('SIGINT', () => this.bot.stop('SIGINT'))
    process.once('SIGTERM', () =>this.bot.stop('SIGTERM'))
  }

  async sendLog(log: any) {
    try {
      this.bot.telegram.sendMessage(config.telegram.logChannel, log.toString());
    } catch (error) {
      console.log(error);
    }
  }
}